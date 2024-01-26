import DocViewer from "react-doc-viewer";

function Pdfviewer() {
    const docs = [
        {uri:require("../assets/doc/CV-DOC.pdf")}
    ]
    return (
        <DocViewer documents={docs}/>
    )
}
export default Pdfviewer