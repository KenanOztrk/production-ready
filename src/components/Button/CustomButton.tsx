import React from 'react';
import { Button, CircularProgress, Tooltip } from '@mui/material';
import type { ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  loading?: boolean;
  tooltip?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  to?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  loading = false,
  tooltip,
  startIcon,
  endIcon,
  children,
  ...rest
}) => {
  const button = (
    <Button
      {...rest}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={loading || rest.disabled}
  
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : children}
    </Button>
  );

  return tooltip ? <Tooltip title={tooltip}>{button}</Tooltip> : button;
};

export default CustomButton;