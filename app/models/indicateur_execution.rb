class IndicateurExecution < ApplicationRecord
  belongs_to :service_executant
  belongs_to :indicateur

  require 'roo'
  require 'axlsx'

  def self.import(file)
    @indicateurs = Indicateur.all
  	data = Roo::Spreadsheet.open(file.path)
    headers = data.row(1) # get header row
  	data.each_with_index do |row, idx|
    next if idx == 0 # skip header
      row_data = Hash[[headers, row].transpose]
      se = ServiceExecutant.where(code: row_data['code']).first
      if !se.nil?
        @indicateurs.each do |indicateur|
          if !row_data[indicateur.name].nil? && !row_data[indicateur.name].blank? #on verifie que la colonne existe 
            #si la date existe déjà on recupere la derniere valeur d'ex et on vient l'écraser 
            if se.indicateur_executions.where('indicateur_id = ? AND date = ?',indicateur.id,row_data["date"].to_date).count > 0
            @indicateur_execution = se.indicateur_executions.where('indicateur_id = ? AND date = ?',indicateur.id,row_data["date"].to_date).first
            else 
            @indicateur_execution = IndicateurExecution.new 
            @indicateur_execution.service_executant_id = se.id 
            @indicateur_execution.indicateur_id = indicateur.id
            @indicateur_execution.date = row_data["date"].to_date   
            end
            @indicateur_execution.valeur = row_data[indicateur.name] #on garde meme les nils            
            @indicateur_execution.save
            
          end
        end 
      end
  	end
	end 


end
