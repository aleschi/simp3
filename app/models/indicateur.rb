class Indicateur < ApplicationRecord
	has_many :indicateur_executions, dependent: :destroy

	require 'csv'

  require 'roo'
  require 'axlsx'
  
  def self.import(file)
      #Indicateur.destroy_all
      data = Roo::Spreadsheet.open(file.path)
      headers = data.row(1) # get header row
      
      data.each_with_index do |row, idx|
        next if idx == 0 # skip header
        row_data = Hash[[headers, row].transpose]
        if Indicateur.where('name = ?',row_data['Code']).count > 0
            @indicateur = Indicateur.where('name = ?',row_data['Code']).first
        else
            @indicateur = Indicateur.new 
        end
        @indicateur.name = row_data['Code']
        @indicateur.description = row_data['Libellés des indicateurs']
        @indicateur.type_indicateur = row_data['Informations à afficher']
        @indicateur.unite = row_data['Unité indicateur']
        @indicateur.calcul = row_data['Calcul']
        @indicateur.remarque = row_data['Remarques principales']
        if !row_data['seuil 1'].blank? && !row_data['seuil 1'].nil?
          @indicateur.seuil_1 = row_data['seuil 1'].to_f
          @indicateur.seuil_2 = row_data['seuil 2'].to_f
        end
        @indicateur.save
      end
	end
  
end
