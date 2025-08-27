import Button from "@mui/material/Button";

export default function ButtonComponent({
  children,
  variant = "text",
  sx,
  startIcon,
  endIcon,
  size,
  ...rest
}) {
  return (
      <Button
        sx={{ ...sx }}
        size={size && size}
        variant={variant && variant}
        startIcon={startIcon}
        endIcon={endIcon}
        {...rest}
      >
        {children}
      </Button>
  );
}
