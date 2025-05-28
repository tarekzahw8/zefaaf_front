import { useState } from "react";
import Select from "react-select";
import countries from "world-countries";

const countryOptions = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
}));
const SelectCountry = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };
  return (
    <div className="text-[#333] w-[50%]">
      <label htmlFor="country">اختر الدولة:</label>
      <Select
      className="h-full "
        id="country"
        value={selectedCountry}
        onChange={handleCountryChange}
        options={countryOptions}
        placeholder="اختر الدولة"
      />
      {selectedCountry && <p>الدولة المختارة: {selectedCountry.label}</p>}
    </div>
  );
};

export default SelectCountry;
