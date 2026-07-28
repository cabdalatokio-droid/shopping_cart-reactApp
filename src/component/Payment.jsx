import { useEffect, useState } from "react";
import useShop from "../shopContext";
import axios from "axios";

const Payment = () => {
  const initialPayment = {
    evc: false,
    zaad: false,
    sahal: false,
  };

  const [payment, setPaymentMethod] = useState(initialPayment);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [update, setUpdated] = useState(false);

  const { total } = useShop();

  // ✅ Correct useEffect
  useEffect(() => {
    if (update) {
      console.log("Payment state updated");
    }
  }, [update]);

  // ✅ Get selected payment method
  const getSelectedMethod = () => {
    if (payment.zaad) return "zaad";
    if (payment.sahal) return "sahal";
    if (payment.evc) return "evc";
    return "";
  };

  // ✅ Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();

    // 🔐 Validation
    if (!phone) {
      alert("Please enter your phone number");
      return;
    }

    if (!getSelectedMethod()) {
      alert("Please select a payment method");
      return;
    }

    processPayment();
  };

  // ✅ Payment processing
  const processPayment = async () => {
    const body = {
      schemaVersion: "1.0",
      requestId: Date.now(),
      timestamp: Date.now(),
      channelName: "web",
      serviceName: "API_PURCHASE",
      serviceParams: {
        merchantUid: process.env.REACT_APP_MERCHANT_U_ID,
        apiUserId: process.env.REACT_APP_MERCHANT_API_USER_ID,
        apiKey: process.env.REACT_APP_MERCHANT_API_KEY,

        paymentMethod: getSelectedMethod(),

        payerInfo: {
          account: phone,
        },

        transactionInfo: {
          referenceId: "REF-" + Date.now(), // ✅ fixed typo + unique
          invoiceId: "INV-" + Date.now(),
          amount: total,
          currency: "USD",
          description: "React Shopping Cart Payment",
        },
      },
    };

    try {
      setLoading(true);

      const { data } = await axios.post(
        "https://api.waafi.com/asm",
        body
      );

      setLoading(false);

      if (data.responseCode === "2001") {
        alert("✅ Payment Processed Successfully!");
        setUpdated(!update);
        setPhone("");
        setPaymentMethod(initialPayment);
      } else {
        console.error("Payment Error:", data.responseMsg);
        alert(`❌ Payment Failed: ${data.responseMsg}`);
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      alert("⚠️ Network error. Please try again.");
    }
  };

  return (
    <div className="payment-container">
      <h2>Pay With</h2>

      <div className="payments-cards">
        <div
          className={`payment-card ${payment.zaad ? "selected" : ""}`}
          onClick={() =>
            setPaymentMethod({ ...initialPayment, zaad: true })
          }
        >
          Zaad Service
        </div>

        <div
          className={`payment-card ${payment.sahal ? "selected" : ""}`}
          onClick={() =>
            setPaymentMethod({ ...initialPayment, sahal: true })
          }
        >
          Sahal Service
        </div>

        <div
          className={`payment-card ${payment.evc ? "selected" : ""}`}
          onClick={() =>
            setPaymentMethod({ ...initialPayment, evc: true })
          }
        >
          EVC Plus Service
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="tel"
          className="form-control"
          placeholder="2526xxxxxxx"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button
          type="submit"
          className="btn-proceed"
          disabled={loading}
        >
          {loading ? "Processing..." : "Proceed"}
        </button>
      </form>
    </div>
  );
};

export default Payment;