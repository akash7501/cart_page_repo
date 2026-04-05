export default function Cart() {
  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(20px)",
          padding: "40px",
          borderRadius: "24px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          textAlign: "center",
          maxWidth: "500px",
        }}
      >
        <div style={{ fontSize: "64px", marginBottom: "20px" }}>🛒</div>
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#2d3436",
            marginBottom: "16px",
            lineHeight: "1.2",
          }}
        >
          Shopping Cart
        </h1>
        <p style={{ color: "#636e72", fontSize: "18px", marginBottom: "24px" }}>
          Your microservices-powered shopping experience is ready.
        </p>
        <div
          style={{
            background: "#00b894",
            color: "white",
            padding: "12px 24px",
            borderRadius: "12px",
            fontWeight: "600",
            display: "inline-block",
            boxShadow: "0 4px 10px rgba(0, 184, 148, 0.3)",
          }}
        >
          Success: Cart Microfrontend Loaded
        </div>
      </div>
    </div>
  );
}