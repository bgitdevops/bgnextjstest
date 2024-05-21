import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import EastIcon from "@mui/icons-material/East";
import CustomTabPanel from "./CustomTabPanel";
import { Divider } from "@mui/material";

const AntTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "#000000",
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    padding: 0,
    color: "#000000",
    fontFamily: `ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
    fontSize: "1.1rem",
    "&:hover": {
      color: "#019881",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#000000",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);

export default function TabHome(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ bgcolor: "#fff", mb: 5 }}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          {props.regionalItems.map((item) => (
            <AntTab
              key={item.id}
              data-sb-field-path={`${item.id}:regionTitle`}
              label={item.regionTitle}
            />
          ))}
        </AntTabs>
      </Box>
      {props.regionalItems.map((item, index) => (
        <CustomTabPanel
          key={item.id}
          value={value}
          data-sb-object-id={item.id}
          index={index}
        >
          <div className="grid grid-cols-2 gap-8">
            {item.relatedCountry.map((country) => (
              <div
                data-sb-object-id={country.id}
                key={country.id}
                className="text-lg"
              >
                <div data-sb-field-path="name" className="font-medium">
                  {country.name}
                </div>
                <div className="mt-4">
                  {country.stateItems.map((stateItem) => (
                    <div
                      key={stateItem.id}
                      data-sb-object-id={stateItem.id}
                      className="flex items-center mt-3 hover:text-[#019881] cursor-pointer w-max"
                    >
                      <div data-sb-field-path="title">{stateItem.title}</div>
                      <EastIcon fontSize="small" className="ml-3" />
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <Divider />
                </div>
              </div>
            ))}
          </div>
        </CustomTabPanel>
      ))}
    </Box>
  );
}
