import { FC, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { LR } from '../../utils/types';
import { Dev, DevProps } from '../dev';
import { Button } from '../button';

export interface PopoverProps extends DevProps {
  closeButton?: boolean;
  closeButtonLocation?: LR;
  isOpen?: boolean;
  setIsOpen?: (value: boolean) => void;
  backgroundClickClose?: boolean;
  headerPalette?: DevProps['bgPalette'];
  headerPaletteStop?: DevProps['bgPaletteStop'];
  titlePalette?: DevProps['textPalette'];
  titlePaletteStop?: DevProps['textPaletteStop'];
  descriptionPalette?: DevProps['textPalette'];
  descriptionPaletteStop?: DevProps['textPaletteStop'];
  title?: string;
  description?: string;
  showButtonFooter?: boolean;
  onCancel?: () => void;
  onSave?: () => void;
}

export const Popover: FC<PopoverProps> = ({
  isOpen = true,
  backgroundClickClose = true,
  setIsOpen,
  opacity = 75,
  children,
  title,
  description,
  bgPalette = 'white',
  bgPaletteStop,
  headerPalette = 'secondary',
  headerPaletteStop = 700,
  titlePalette = 'secondary',
  titlePaletteStop = 50,
  descriptionPalette = 'secondary',
  descriptionPaletteStop = 200,
  closeButton = true,
  closeButtonLocation = 'r',
  onCancel,
  onSave,
  showButtonFooter = false,
  top = '[50px]',
  right = 0,
  left = '[90px]'
}) => {
  const openPopover = () => {
    isOpen = true;
  };

  const closePopover = () => {
    isOpen = false;
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-40'
        onClose={backgroundClickClose && setIsOpen ? setIsOpen : openPopover}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div
            className={`fixed inset-0 bg-gray-500 bg-opacity-${opacity} transition-opacity top-${top} left-${left}`}
          />
        </Transition.Child>

        <Dev position='fixed' inset={0} overflow='hidden'>
          <Dev position='absolute' inset={0} overflow='hidden'>
            <Dev
              pointerEvents='none'
              position='fixed'
              inset='y-0'
              display='flex'
              maxWidth='full'
              padding='l-10'
              classes={`top-${top} right-${right}`}>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'>
                <Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
                  <Dev
                    flexDirection='col'
                    height='full'
                    overflow='y-scroll'
                    boxShadow='xl'
                    bgPalette={bgPalette}
                    bgPaletteStop={bgPaletteStop}>
                    <Dev
                      bgPalette={headerPalette}
                      bgPaletteStop={headerPaletteStop}
                      padding={['x-4', 'y-6']}
                      classes=' sm:px-6'>
                      <Dev
                        display='flex'
                        alignItems='start'
                        justifyContent={
                          closeButtonLocation === 'r' ? 'between' : 'start'
                        }>
                        {closeButton && closeButtonLocation === 'l' && (
                          <Dev
                            margin='r-3'
                            display='flex'
                            height={7}
                            alignItems='center'>
                            <Button
                              iconOnly={true}
                              leadingIcon='XMarkIcon'
                              btnSize='icon-only'
                              iconSize='xl'
                              bgPalette='transparent'
                              textPalette='neutral'
                              textPaletteStop={{
                                base: 400,
                                hover: 300
                              }}
                              boxShadow='none'
                              onClick={() =>
                                setIsOpen ? setIsOpen(false) : closePopover
                              }
                            />
                          </Dev>
                        )}
                        <Dev flexDirection='col'>
                          <Dialog.Title
                            className={
                              `text-base font-semibold leading-6 ` +
                                titlePalette !==
                                'white' && titlePalette !== 'black'
                                ? `text-${titlePalette}-${titlePaletteStop}`
                                : `text-${titlePalette}`
                            }>
                            {title}
                          </Dialog.Title>
                          <Dev margin='t-1'>
                            <Dialog.Description
                              className={`text-sm text-${descriptionPalette}-${descriptionPaletteStop}`}>
                              {description}
                            </Dialog.Description>
                          </Dev>
                        </Dev>
                        {closeButton && closeButtonLocation === 'r' && (
                          <Dev
                            margin='l-3'
                            display='flex'
                            height={7}
                            alignItems='center'>
                            <Button
                              iconOnly={true}
                              leadingIcon='XMarkIcon'
                              btnSize='icon-only'
                              iconSize='xl'
                              bgPalette='transparent'
                              textPalette={titlePalette}
                              textPaletteStop={titlePaletteStop}
                              boxShadow='none'
                              onClick={() =>
                                setIsOpen ? setIsOpen(false) : closePopover
                              }
                            />
                          </Dev>
                        )}
                      </Dev>
                    </Dev>
                    <Dev>{children}</Dev>
                    {showButtonFooter && (
                      <Dev
                        flexShrink={0}
                        justifyContent='end'
                        padding={4}
                        gap={2}>
                        <Button
                          label='Cancel'
                          btnPalette='white'
                          btnHoverPalette='neutral'
                          btnHoverPaletteStop={100}
                          textPalette='secondary'
                          textPaletteStop={700}
                          borderPalette='neutral'
                          borderPaletteStop={300}
                          borderWidth='base'
                          onClick={() => (onCancel ? onCancel : closePopover)}
                        />
                        <Button
                          label='Save'
                          btnPalette='secondary'
                          btnHoverPalette='secondary'
                          onClick={() => (onSave ? onSave : closePopover)}
                        />
                      </Dev>
                    )}
                  </Dev>
                </Dialog.Panel>
              </Transition.Child>
            </Dev>
          </Dev>
        </Dev>
      </Dialog>
    </Transition.Root>
  );
};
