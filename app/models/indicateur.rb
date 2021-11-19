class Indicateur < ApplicationRecord
	has_many :indicateur_executions

	require 'csv'
  
  def self.import(file)
    	CSV.foreach(file.tempfile) do |row|
      		if !row[0].nil? && !row[0].empty? && row[0] != "Code"
            if Indicateur.where('name = ?',row[0]).count > 0
              @indicateur = Indicateur.where('name = ?',row[0]).first
            else
        			@indicateur = Indicateur.new 
            end
      			@indicateur.name = row[0]
      			@indicateur.description = row[1]
      			@indicateur.type_indicateur = row[2]
      			@indicateur.unite = row[3]
      			@indicateur.calcul = row[4]
      			@indicateur.remarque = row[5]
            @indicateur.seuil_1 = row[6]
            @indicateur.seuil_2 = row[7]
      			@indicateur.save
    		end
  		end
    if Indicateur.where('description = ?','Libellés des indicateurs ').count > 0
      Indicateur.where('description = ?','Libellés des indicateurs ').first.destroy
    end
	end
end
