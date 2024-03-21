function IconBtn({
  text,
  onclick,
  children,
  disabled,
  outline = false,
  customClasses,
  type,
}) {
  return (
    
    <button
      disabled={disabled}
      onClick={onclick}
      className={`flex items-center justify-center outline-none ${
        outline ? "border border-yellow-100 bg-transparent" : "bg-yellow-200"
      } cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900 hover:bg-blue-600 hover:text-yellow-50 duration-300 ${customClasses}`}
      type={type}
    >
      {children ? (
        <>
          <span className={`${outline && "text-yellow-50"}`}>{text}</span>
          {children}
        </>
      ) : (
        text
      )}
    </button>
  );
}

export default function ConfirmationModal({ modalData }) {

  
  return (
    
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto  bg-opacity-10 backdrop-blur-sm ">
      <div className="w-10/12 max-w-[350px] rounded-lg border border-green-500 bg-yellow-100 p-6">
        <p className="text-2xl font-semibold text-black-400">
          {modalData?.text1}
        </p>

        <p className="mt-3 mb-5 leading-6 text-black-500">
          {modalData?.text2}
        </p>

        <div className="flex items-center gap-x-4">
          <IconBtn
            onclick={modalData?.btn1Handler}
            text={modalData?.btn1Text}
          />
            {
              modalData?.btn2Handler &&
              <button
              className="cursor-pointer rounded-md text-black-900 hover:bg-green-600 hover:text-black-200 bg-green-400
                                     py-[8px] px-[20px] font-semibold duration-300 "
              onClick={modalData?.btn2Handler}
            >
              {modalData?.btn2Text}
            </button>

            }
         
        </div>
      </div>
    </div>
  );
}
