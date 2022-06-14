class IndicateurExecution < ApplicationRecord
  belongs_to :service_executant
  belongs_to :indicateur

  require 'roo'
  require 'axlsx'

  def self.import(file)
    @indicateurs = Indicateur.all.order(name: :asc)
  	data = Roo::Spreadsheet.open(file.path)
    #data.default_sheet = data.sheets.last si plusieurs sheets
    headers = data.row(1) # get header row
    headers2 = data.row(2) # get 2nd header row
    date = data.cell(1,1).to_date-1.month
    date = date.change(day: 1)
    #colonne of indicateurs
    array=[6,9,12,24,27,14,16,18,20,30,33,36,39,42,45,48,7,41,40,47,5,35]
  	data.each_with_index do |row, idx|
      next if idx == 0 # skip header
      next if idx == 1
      row_data = Hash[[headers, row].transpose]
      row_data2 = Hash[[headers2, row].transpose]
      se = ServiceExecutant.where(code: row_data2['Service Exécutant']).first
      if !se.nil?
        @indicateurs.each_with_index do |indicateur,j|
          if !row[array[j]].nil? && !row[array[j]].blank? #on verifie que la colonne existe 
            #si la date existe déjà on recupere la derniere valeur d'ex et on vient l'écraser 
            if se.indicateur_executions.where('indicateur_id = ? AND date = ?',indicateur.id,date).count > 0
              @indicateur_execution = se.indicateur_executions.where('indicateur_id = ? AND date = ?',indicateur.id,date).first
            else 
              @indicateur_execution = IndicateurExecution.new 
              @indicateur_execution.service_executant_id = se.id 
              @indicateur_execution.indicateur_id = indicateur.id
              @indicateur_execution.date = date
            end
                                  
            if indicateur.unite == "%"
              @indicateur_execution.valeur = row[array[j]].to_f * 100 
            else 
              @indicateur_execution.valeur = row[array[j]].to_f
            end
            @indicateur_execution.save

            if !indicateur.seuil_1.nil?
              if indicateur.name == 'IB4 - 2' || indicateur.name == 'IB4 - 3' || indicateur.name == 'IB4 - 4'
                if @indicateur_execution.valeur <= indicateur.seuil_1
                  @indicateur_execution.point = 1 
                elsif @indicateur_execution.valeur <= indicateur.seuil_2
                  @indicateur_execution.point = 2
                else
                  @indicateur_execution.point = 3
                end
              else 
                if @indicateur_execution.valeur <= indicateur.seuil_1
                  @indicateur_execution.point = 3 
                elsif @indicateur_execution.valeur <= indicateur.seuil_2
                  @indicateur_execution.point = 2
                else
                  @indicateur_execution.point = 1
                end
              end
            end 

            @indicateur_execution.save
            
          end
        end 
      end
  	end

    #calcul perf globale 
    ServiceExecutant.all.each do |service|
      if service.performances.where(date: date).count > 0 
        @performance = service.performances.where(date: date).first
      else 
        @performance = service.performances.new(date: date)
      end 
      @performance.valeur = service.indicateur_executions.where(date: date).sum(:point)
      @performance.save
    end 
	end 


end
