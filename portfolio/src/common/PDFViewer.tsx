// import { useState } from "react";

const documents: string[] = ["/documents/Dissertation.pdf", "/documents/LiteratureReview.pdf", "/documents/ProjectProposal.pdf"];

const PDFViewer = () => {
    // const [selectedDocument, setDocument] = useState(0);

    return (
        <div>
            <object data={documents[0]} className="w-full h-[95vh]" type="application/pdf" />
        </div>
    );
};

export default PDFViewer;
