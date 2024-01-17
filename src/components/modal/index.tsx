import { FC, Fragment } from 'react';
import { LR } from '../../utils/types';
import { Dev, DevProps } from '../dev';
import { Dialog, Transition } from '@headlessui/react';
import { Button } from '../button';

export interface ModalProps extends DevProps {
  closeButton?: boolean;
  closeButtonLocation?: LR;
  modalWidth?: DevProps['maxWidth'];
  modalHeight?: DevProps['height'];
  modalCorners?: 'rounded' | 'square';
  isOpen?: boolean;
  setIsOpen?: (value: boolean) => void;
  backgroundClickClose?: boolean;
}

export const Modal: FC<ModalProps> = ({
  children,
  closeButton = true,
  closeButtonLocation = 'r',
  modalWidth = 'lg',
  modalHeight = 'auto',
  modalCorners = 'rounded',
  isOpen = false,
  backgroundClickClose = true,
  setIsOpen,
  opacity = 75
}) => {
  const corners = modalCorners === 'rounded' ? 'lg' : 'none';

  const openModal = () => {
    isOpen = true;
  };

  const closeModal = () => {
    isOpen = false;
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-50'
        onClose={backgroundClickClose && setIsOpen ? setIsOpen : openModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div
            className={`fixed inset-0 bg-gray-500 bg-opacity-${opacity} transition-opacity`}
          />
        </Transition.Child>

        <Dev
          position='fixed'
          zIndex='50'
          width='screen'
          overflow='y-auto'
          classes='inset-0'>
          <Dev
            display='flex'
            minHeight='full'
            justifyContent='center'
            padding={4}
            textAlign='center'
            classes='items-end sm:items-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
              <Dialog.Panel
                className={
                  `relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-${modalWidth} min-h-4 sm:h-${modalHeight}` +
                  ` rounded-${corners}`
                }>
                {closeButton && (
                  <Dev
                    position='absolute'
                    padding={
                      closeButtonLocation === 'r'
                        ? ['r-4', 't-4']
                        : ['l-4', 't-4']
                    }
                    classes={
                      closeButtonLocation === 'r'
                        ? 'top-0 right-0 hidden sm:block'
                        : 'top-0 left-0 hidden sm:block'
                    }>
                    <Button
                      iconOnly={true}
                      leadingIcon='XMarkIcon'
                      btnSize='icon-only'
                      iconSize='xl'
                      bgPalette='transparent'
                      textPalette='neutral'
                      textPaletteStop={{
                        base: 400,
                        hover: 500
                      }}
                      boxShadow='none'
                      onClick={() =>
                        setIsOpen ? setIsOpen(false) : closeModal
                      }
                    />
                  </Dev>
                )}
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </Dev>
        </Dev>
      </Dialog>
    </Transition.Root>
  );
};
