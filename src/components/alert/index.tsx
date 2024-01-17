import { FC } from 'react';
import { Icon, IconProps } from '../icon';
import { Button } from '../button';
import { Dev, DevProps } from '../dev';
import { Label } from '../label';
import { Text } from '../text';
import { Container } from '../container';

export interface AlertProps extends DevProps {
  variant?: 'success' | 'error' | 'warning';
  title?: string;
  message?: string;
  isVisible?: boolean;
  onDismiss?: (value: boolean) => void;
  onCancel?: () => void;
  onContinue?: () => void;
  showButtons?: boolean;
  hideX?: boolean;
  corner?: 'rounded' | 'square';
}

export const Alert: FC<AlertProps> = ({
  variant = 'success',
  title,
  isVisible = true,
  onDismiss,
  onCancel,
  onContinue,
  showButtons = false,
  hideX = true,
  message,
  width = 'full',
  corner = 'square',
  padding = 4,
  ...props
}) => {
  const defaultTitles = {
    warning: 'Warning',
    error: 'Error',
    success: 'Success'
  };

  const defaultIconProps: IconProps = {
    width: 5,
    height: 5,
    classes: 'mt-[3px]',
    defaultPaletteStop: 400
  };
  const icons = {
    warning: (
      <Icon
        svg='ExclamationTriangleIcon'
        defaultPalette='warning'
        {...defaultIconProps}
      />
    ),
    error: (
      <Icon svg='XCircleIcon' defaultPalette='error' {...defaultIconProps} />
    ),
    success: (
      <Icon
        svg='CheckCircleIcon'
        defaultPalette='success'
        {...defaultIconProps}
      />
    )
  };

  const AlertContainerProps: AlertProps = {
    width,
    borderRadius: corner === 'square' ? 'none' : 'base',
    padding,
    borderWidth: 'l-4',
    borderPalette: variant,
    borderPaletteStop: 400,
    bgPalette: variant,
    bgPaletteStop: 50,
    container: false,
    flexDirection: 'col',
    ...props
  };

  const closeAlert = () => {
    isVisible = false;
  };

  return (
    <>
      {isVisible && (
        <Container {...AlertContainerProps}>
          <Dev display='flex' width='full' justifyContent='between'>
            <Dev flexShrink={0}>{icons[variant]}</Dev>
            <Dev flexDirection='col'>
              <Dev margin='l-3'>
                <Label
                  fontSize='base'
                  fontWeight='medium'
                  textPalette={variant}
                  textPaletteStop={800}>
                  {title || defaultTitles[variant]}
                </Label>
                <Text fontSize='sm' textPalette={variant} textPaletteStop={700}>
                  {message}
                </Text>
              </Dev>
            </Dev>
            <Dev margin='l-auto' padding='l-3' justifyContent='end'>
              <Dev classes='-mx-1.5 -my-1.5' justifyContent='end'>
                {!hideX && (
                  <Button
                    iconOnly={true}
                    btnSize='icon-only'
                    boxShadow='none'
                    leadingIcon='XMarkIcon'
                    bgPalette='transparent'
                    textPalette='neutral'
                    textPaletteStop={400}
                    onClick={() => (onDismiss ? onDismiss(false) : closeAlert)}
                    classes={'focus:outline-none p-1.5'}>
                    <span className='sr-only'>Dismiss</span>
                  </Button>
                )}
              </Dev>
            </Dev>
          </Dev>
          {showButtons && (
            <Dev
              display='flex'
              margin='t-5'
              width='full'
              justifyContent='end'
              gap={2}>
              <Button
                label='Cancel'
                btnPalette='white'
                btnHoverPalette='neutral'
                btnHoverPaletteStop={100}
                borderWidth='base'
                borderPalette={variant}
                borderPaletteStop={700}
                textPalette={variant}
                textPaletteStop={700}
                onClick={onCancel}
              />
              <Button
                label='Continue'
                btnPalette={variant}
                btnHoverPalette={variant}
                btnPaletteStop={700}
                btnHoverPaletteStop={900}
                onClick={onContinue}
              />
            </Dev>
          )}
        </Container>
      )}
    </>
  );
};
