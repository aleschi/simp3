class IndicateurExecution < ApplicationRecord
  	belongs_to :service_executant
  	belongs_to :indicateur

   require 'csv'
  
  	def self.import(file)
  		data = Roo::Spreadsheet.open(file.tempfile)
  		data.each_with_index do |row, idx|
  		end
    	CSV.foreach(file.tempfile) do |row|
      		if !row[0].nil? && !row[0].empty? && row[0] != "Code Service Executant"
      			
    		end
  		end
	end
end
