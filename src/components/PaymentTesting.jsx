import { CheckCircle, XCircle } from "lucide-react";

const PaymentTesting = ({
  selectedDevice,
  setShowAmountModal,
  setPaymentAction,
}) => {
  const openModal = (action) => {
    setPaymentAction(action);
    setShowAmountModal(true);
  };

  return (
    <div
      className="
        rounded-2xl bg-white/70 dark:bg-zinc-800/70 
        backdrop-blur-xl border border-white/20 dark:border-zinc-700
        shadow-lg dark:shadow-xl p-4 sm:p-6 mb-6 transition-all
      ">
      <h2 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">
        Payment Testing
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:gap-4">
        {/* Show QR Code (Init Payment) */}
        {selectedDevice.hasQR && (
          <button
            onClick={() => openModal("init")}
            className="
              group p-4 sm:p-6 rounded-xl w-full
              bg-gradient-to-br from-purple-600 to-indigo-600
              hover:from-purple-500 hover:to-indigo-500
              active:scale-95 transition-all shadow-md
              text-white font-medium flex flex-col items-center gap-1.5 sm:gap-2
            ">
            <span className="text-2xl sm:text-3xl group-hover:scale-110 transition">
              📷
            </span>
            <span className="text-sm sm:text-base text-center">
              Show QR Code (Init Payment)
            </span>
          </button>
        )}

        {/* Success + Failed Buttons */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {/* Payment Success */}
          <button
            onClick={() => openModal("success")}
            className="
              group p-4 sm:p-6 rounded-xl 
              bg-gradient-to-br from-emerald-600 to-green-600
              hover:from-emerald-500 hover:to-green-500
              active:scale-95 transition-all shadow-md
              text-white font-medium flex flex-col items-center gap-1.5 sm:gap-2
            ">
            <CheckCircle
              className="
                w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10
                group-hover:scale-110 transition
              "
            />
            <span className="text-sm sm:text-base">Success</span>
          </button>

          {/* Payment Failed */}
          <button
            onClick={() => openModal("failed")}
            className="
              group p-4 sm:p-6 rounded-xl 
              bg-gradient-to-br from-rose-600 to-red-600
              hover:from-rose-500 hover:to-red-500
              active:scale-95 transition-all shadow-md
              text-white font-medium flex flex-col items-center gap-1.5 sm:gap-2
            ">
            <XCircle
              className="
                w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10
                group-hover:scale-110 transition
              "
            />
            <span className="text-sm sm:text-base">Failed</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentTesting;
