import { useState } from 'react';

export const ToolTip = (props: { tip: string; tipLocation?: string }) => {
  const { tip, tipLocation } = props;
  const [tooltipStatus, setTooltipStatus] = useState(0);
  return (
    <>
      <div className='flex-col md:flex-row flex items-center md:justify-center'>
        <div
          className='relative'
          onMouseEnter={() => setTooltipStatus(1)}
          onMouseLeave={() => setTooltipStatus(0)}>
          <div className='mr-2 cursor-pointer'>
            <svg
              aria-haspopup='true'
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-info-circle'
              width={12}
              height={12}
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='#A0AEC0'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z' />
              <circle cx={12} cy={12} r={9} />
              <line x1={12} y1={8} x2='12.01' y2={8} />
              <polyline points='11 12 12 12 12 16 13 16' />
            </svg>
          </div>
          {tooltipStatus == 1 && (
            <div
              role='tooltip'
              className={
                tipLocation === 'l'
                  ? `z-50 -mt-20 w-64 absolute transition duration-150 ease-in-out right-0 mr-8 shadow-lg bg-white p-4 rounded`
                  : tipLocation === 'r'
                  ? `z-50 -mt-20 w-64 absolute transition duration-150 ease-in-out left-0 ml-8 shadow-lg bg-white p-4 rounded`
                  : `z-50 -mt-32 -ml-28 w-64 absolute transition duration-150 ease-in-out shadow-lg bg-white p-4 rounded`
              }>
              {tipLocation === 'r' ? (
                <svg
                  className={`absolute left-0 -ml-2 bottom-0 top-0 h-full`}
                  width='9px'
                  height='16px'
                  viewBox='0 0 9 16'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'>
                  <g
                    id='Page-1'
                    stroke='none'
                    strokeWidth={1}
                    fill='none'
                    fillRule='evenodd'>
                    <g
                      id='Tooltips-'
                      transform='translate(-874.000000, -1029.000000)'
                      fill='#FFFFFF'>
                      <g
                        id='Group-3-Copy-16'
                        transform='translate(850.000000, 975.000000)'>
                        <g
                          id='Group-2'
                          transform='translate(24.000000, 0.000000)'>
                          <polygon
                            id='Triangle'
                            transform='translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) '
                            points='4.5 57.5 12.5 66.5 -3.5 66.5'
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              ) : tipLocation === 'l' ? (
                <svg
                  className={`absolute right-0 -mr-2 bottom-0 top-0 h-full`}
                  width='9px'
                  height='16px'
                  viewBox='0 0 9 16'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'>
                  <g
                    id='Page-1'
                    stroke='none'
                    strokeWidth={1}
                    fill='none'
                    fillRule='evenodd'>
                    <g
                      id='triangle'
                      transform='translate(5.000000, 8.500000) scale(-1, 1) translate(-5.000000, -8.500000) translate(0.500000, 0.500000)'
                      fill='#FFFFFF'
                      fillRule='nonzero'>
                      <polygon
                        id='Triangle'
                        transform='translate(4.500000, 8.000000) rotate(-90.000000) translate(-4.500000, -8.000000) '
                        points='4.5 3.5 12.5 12.5 -3.5 12.5'></polygon>
                    </g>
                  </g>
                </svg>
              ) : (
                <svg
                  className={`absolute bottom-0 -mb-32 h-full`}
                  width='17px'
                  height='10px'
                  viewBox='0 0 17 10'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'>
                  <g
                    id='Page-1'
                    stroke='none'
                    strokeWidth={1}
                    fill='none'
                    fillRule='evenodd'>
                    <polygon
                      id='Triangle'
                      fill='#FFFFFF'
                      points='8.5 0.5 16.5 9.5 0.5 9.5'></polygon>
                  </g>
                </svg>
              )}
              <p className='text-sm font-bold text-gray-800 pb-1'>Tip:</p>
              <p
                className='text-xs leading-4 text-gray-600 pb-3'
                dangerouslySetInnerHTML={{ __html: tip }}></p>
            </div>
          )}{' '}
        </div>
      </div>
    </>
  );
};
