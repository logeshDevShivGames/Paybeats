const AmountModal = ({
  visible,
  setVisible,
  amount,
  setAmount,
  paymentAction,
  selectedDevice,
  sendCommand,
}) => {
  if (!visible) return null;

  const confirm = () => {
    sendCommand?.({
      type: "payment",
      amount: amount,
      // amount_url: "https://yourdomain.com/audio/10.mp3",
      amount_url:
        "https://mobcup.com.co/wp-content/uploads/z7x41bw695i7mq8ok28wmearf8y970yxc.mp3",
      // "https://mobcup.fm/va/6l7yXc7qBeGcIEmBcSa8r",

      // "https://cdn.uppbeat.io/audio-files/13a6d3c9e914de5ab3fb451786993718/826e482389c32b91a018438d75032fb2/128a811678cd078e2ebf1ae98be81df8/STREAMING-cash-register-opening-smartsound-fx-1-00-02.mp3",
    });
    setAmount(amount);
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
            mb-4 capitalize tracking-tight 
          ">
          Payment
        </h3>

        {/* <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4">
          Enter the payment amount
        </p> */}

        {/* Input */}
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          readOnly
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
            Send Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmountModal;
