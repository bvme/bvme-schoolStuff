export const ImageContainer = () => {
    const styles = {
      asd: { display: "flex" },
      qwe: {
        width: "300px",
      },
    };
  return (
    <div style={styles.asd}>
      <img
        style={styles.qwe}
        src="https://hips.hearstapps.com/hmg-prod/images/cushioned-shoes-15407-1632754173.jpg?crop=1.00xw:0.846xh;0,0.154xh&resize=2048:*"
        alt=""
      />
    </div>
  );
};
