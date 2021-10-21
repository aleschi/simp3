class Indicateur < ApplicationRecord
	has_many :indicateur_executions

	require 'csv'
  
  	def self.import(file)
    	CSV.foreach(file.tempfile) do |row|
      		if !row[0].nil? && !row[0].empty?
      			@indicateur = Indicateur.new 
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
	end
end
