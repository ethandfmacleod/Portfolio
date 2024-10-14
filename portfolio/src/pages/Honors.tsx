import DownloadFileButton from '@/common/DownloadFileButton'
import PDFButtons from '@/common/PDFButtons'
import PDFViewer from '@/common/PDFViewer'
import { Separator } from '@/components/ui/separator'
import { useState } from 'react'
import { FaArrowTurnDown } from 'react-icons/fa6'

const documents: string[] = [
    "/documents/Dissertation.pdf#navpanes=0",
    "/documents/LiteratureReview.pdf#navpanes=0",
    "/documents/ProjectProposal.pdf#navpanes=0",
    "/documents/ResearchJournal.pdf#navpanes=0",
    "/documents/EDSPoster.pdf#navpanes=0"
]

function Honors() {

    const [selectedDocument, setSelectedDocument] = useState(0);

    return (
        <div className='flex flex-col gap-8 md:flex-row md:gap-12'>
            <div className='w-full md:w-6/12'>
                <PDFViewer document={documents[selectedDocument]} />
            </div>
            <div className='flex flex-col gap-4'>
                <div className='font-semibold text-xl text-center'>
                    Pinch Analysis as a Modular Tool for the Analysis and Optimization of Industrial Chemical Processes
                </div>
                <Separator />
                <PDFButtons selectedDocument={selectedDocument} setSelectedDocument={setSelectedDocument} />
                <div className='flex flex-row justify-between items-center text-md md:text-lg font-semibold mt-4'>
                    Download the Latex Source Below!
                    <FaArrowTurnDown size={15} />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4 justify-end'>
                    <DownloadFileButton text="Dissertation" href="/zips/Dissertation.zip" file="Dissertation.zip" />
                    <DownloadFileButton text="Literature Review" href="/zips/LiteratureReview.zip" file="LiteratureReview.zip" />
                </div>
            </div>

        </div>
    )
}

export default Honors