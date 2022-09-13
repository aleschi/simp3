import React, { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete, {createFilterOptions} from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default ({ items,label,placeholder,onChange,handleSubmit}) => {

	const [selectedOptions, setSelectedOptions] = useState([]);
  	const allSelected = items.length === selectedOptions.length;
  	const handleToggleOption = selectedOptions =>
    setSelectedOptions(selectedOptions);
  	const handleClearOptions = () => setSelectedOptions([]);
  	
  	const handleSelectAll = isSelected => {
    if (isSelected) {
      setSelectedOptions(items);
      handleSubmit(event, items.filter(el => el.id !== "all"));
    } else {
      handleClearOptions();
      handleSubmit(event,[]);
    }
  	};

  	const handleToggleSelectAll = () => {
    handleSelectAll && handleSelectAll(!allSelected);
  	};

  	const handleChange2 = (event, selectedOptions, reason) => {
 
    if (reason === "selectOption" || reason === "removeOption") {
      if (selectedOptions.find(option => option.id === "all")) {
      	
        handleToggleSelectAll();
        let result = [];
        result = items.filter(el => el.id !== "all"); 
        return onChange(result);
        
      } else {
      	
        handleToggleOption && handleToggleOption(selectedOptions);
        handleSubmit(event, selectedOptions);
        return onChange(selectedOptions);
        
      }
    } else if (reason === "clear") {
      handleClearOptions && handleClearOptions();
      handleSubmit(event, selectedOptions);
    }
    
  	};
  	const optionRenderer = (props, option, { selected }) => {
    const selectAllProps =
      option.id === "all" // To control the state of 'select-all' checkbox
        ? { checked: allSelected }
        : {};
    return (
      <li {...props} className="checkbox_li" id={option.id}>
        <Checkbox
          color="primary"
          icon={icon}
          checkedIcon={checkedIcon}
          style={{ marginRight: 8 }}
          checked={selected}
          {...selectAllProps}
        />
        {option.libelle}
      </li>
    );
  };
  const inputRenderer = params => (
    <TextField {...params} label={label} placeholder={placeholder} />
  );
  const getOptionSelected = (option, anotherOption) =>
    option.id === anotherOption.id;
  const filter = createFilterOptions();
  	return (
	    <Autocomplete
	      multiple
	      className="search_checkbox"
	      limitTags={1}
        noOptionsText={'Aucune option'}
	      options={items}
	      value={selectedOptions}
	      disableCloseOnSelect
	      getOptionLabel={(option) => option.libelle}
	      isOptionEqualToValue={getOptionSelected}
	    
	      filterOptions={(options, params) => {
	        const filtered = filter(options, params);
	        return [{ id: "all", libelle: "Tout sélectionner"}, ...filtered];
	      }}
	      onChange={handleChange2}
	      renderOption={optionRenderer}
	      renderInput={inputRenderer}
	    />
  	);
};
