import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";

import { useGlobalStateContext } from "@/сontext/GlobalContext";
import { ButtonIcon } from "@/ui-kit/base-components";

export const Filters = () => {
  const {
    brandFilter,
    setBrandFilter,
    priceFilter,
    setPriceFilter,
    availableBrands,
  } = useGlobalStateContext();

  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredBrands = availableBrands.filter((brand) =>
    brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBrandChange = (brand: string) => {
    setBrandFilter(
      brandFilter.includes(brand)
        ? brandFilter.filter((b) => b !== brand)
        : [...brandFilter, brand]
    );
  };

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriceFilter({
      ...priceFilter,
      min: event.target.value ? Number(event.target.value) : undefined,
    });
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriceFilter({
      ...priceFilter,
      max: event.target.value ? Number(event.target.value) : undefined,
    });
  };

  return (
    <Accordion elevation={0} sx={{ boxShadow: "none" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className="flex flex-row-reverse gap-[10px]"
      >
        <p className="uppercase text-[24px] font-black">Filters</p>
      </AccordionSummary>
      <AccordionDetails>
        <Accordion elevation={0} sx={{ boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className="flex flex-row-reverse gap-[10px]"
          >
            <p className="uppercase text-[16px] font-black">Brands</p>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              sx={{ padding: 0 }}
              size="small"
              placeholder="Search brand"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <ButtonIcon className="w-[40px] h-[40px] flex justify-center items-center" />
                  </InputAdornment>
                ),
              }}
              fullWidth
              className="mb-4"
            />
            <div style={{ maxHeight: 200, overflowY: "auto" }}>
              {filteredBrands.map((brand) => (
                <div key={brand}>
                  <Checkbox
                    checked={brandFilter.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                  />
                  {brand}
                </div>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion elevation={0} sx={{ boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className="flex flex-row-reverse gap-[10px]"
          >
            <p className="uppercase text-[16px] font-black">Price</p>
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex items-center gap-2">
              <TextField
                label="From"
                variant="outlined"
                size="small"
                type="number"
                onChange={handleMinPriceChange}
                fullWidth
              />
              <TextField
                label="To"
                variant="outlined"
                size="small"
                type="number"
                onChange={handleMaxPriceChange}
                fullWidth
              />
            </div>
          </AccordionDetails>
        </Accordion>
      </AccordionDetails>
    </Accordion>
  );
};
