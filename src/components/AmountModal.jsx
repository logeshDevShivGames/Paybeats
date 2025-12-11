import { sendCommand } from "../utils/commandSender";

const AmountModal = ({
  visible,
  setVisible,
  amount,
  setAmount,
  paymentAction,
  selectedDevice,
}) => {
  if (!visible) return null;

  const confirm = () => {
    sendCommand(selectedDevice, `payment:${paymentAction}:${amount}`);
    setAmount("100");
    setVisible(false);
  };

  return (
    <div
      className="
        fixed inset-0 z-50 flex items-center justify-center 
        bg-black/40 backdrop-blur-sm animate-fadeIn
        p-4 sm:p-6
      ">
      <div
        className="
          w-full max-w-xs sm:max-w-sm md:max-w-md 
          p-5 sm:p-6 md:p-7 rounded-2xl 
          bg-white/80
          dark:bg-gradient-to-br dark:from-[#14161A] dark:to-[#1E2329]
          backdrop-blur-xl
          border border-white/40 dark:border-zinc-500/40 
          shadow-2xl dark:shadow-xl animate-scaleIn
        ">
        {/* Heading */}
        <h3
          className="
            text-xl sm:text-2xl md:text-3xl 
            font-bold text-gray-900 dark:text-gray-100 
            mb-2 capitalize tracking-tight
          ">
          {paymentAction} Payment
        </h3>

        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4">
          Enter the payment amount
        </p>

        {/* Input */}
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="
            w-full text-center 
            text-2xl sm:text-3xl md:text-4xl 
            font-bold tracking-tight py-3 sm:py-4 
            rounded-xl 
            bg-white/60 dark:bg-zinc-800/60 
            border border-gray-300 dark:border-zinc-600 dark:text-white
            shadow-inner dark:shadow 
            focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
            outline-none transition-all
            mb-5
          "
        />

        {/* Quick Amount Buttons */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-6">
          {["100", "200", "500", "1000"].map((val) => (
            <button
              key={val}
              onClick={() => setAmount(val)}
              className="
                py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-medium
                bg-blue-50 dark:bg-blue-900/30 
                text-blue-700 dark:text-blue-300 
                border border-blue-200/60 dark:border-blue-800/40
                hover:bg-blue-100 dark:hover:bg-blue-800/40
                transition-all hover:scale-[1.04] active:scale-[0.97]
              ">
              ₹{val}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {/* Cancel */}
          <button
            onClick={() => setVisible(false)}
            className="
              py-2 sm:py-3 rounded-xl font-medium 
              bg-gray-200 dark:bg-zinc-700 
              text-gray-700 dark:text-gray-200
              hover:bg-gray-300 dark:hover:bg-zinc-600
              transition-all hover:scale-[1.02] active:scale-[0.96]
              text-sm sm:text-base
            ">
            Cancel
          </button>

          {/* Confirm */}
          <button
            onClick={confirm}
            className="
              py-2 sm:py-3 rounded-xl font-semibold 
              bg-blue-600 hover:bg-blue-700 text-white 
              shadow-md shadow-blue-500/30
              transition-all hover:scale-[1.03] active:scale-[0.96]
              text-sm sm:text-base
            ">
            Send Command
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmountModal;
