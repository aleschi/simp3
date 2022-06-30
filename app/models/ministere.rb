class Ministere < ApplicationRecord
	has_many :service_executants, dependent: :destroy

	require 'roo'
  	require 'axlsx'

  	def self.import(file)
  		data = Roo::Spreadsheet.open(file.path)
	    headers = data.row(1) # get header row
	    data.each_with_index do |row, idx|
	      next if idx == 0 # skip header
	      row_data = Hash[[headers, row].transpose]

	      @ministere = Ministere.where('name = ?',row_data['Ancien']).first
	      @ministere.name = row_data['Nouveau']
	      @ministere.save
	  end 
  	end
end
