import html2canvas from "html2canvas";
import ButtonComponent from "./ButtonComponet";
function ScreenshotBtn() {
  const takeScreenshot = () => {
    html2canvas(document.body).then((canvas) => {
      const link = document.createElement("a");
      link.download = `screenshot-${Date.now()}.png`;  
      link.href = canvas.toDataURL("image/png");
      link.click(); 
    });
  };

  return (
    <ButtonComponent
      onClick={takeScreenshot}
      sx={{
        color: "primary.main",
      }}
    >
      📸  اسکرین‌شات
    </ButtonComponent>
  );
}

export default ScreenshotBtn;
