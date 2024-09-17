import { TextField } from "@mui/material";

const MUInput = (props: any) => {
  const {
    label = "",
    variant = "",
    id,
    onBlur,
    onChange,
    value,
    style,
    sx,
  } = props || null;
  return (
    <TextField
      id={id}
      label={label}
      variant={variant}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
      style={style}
      sx={sx}
    />
  );
};

export default MUInput;
