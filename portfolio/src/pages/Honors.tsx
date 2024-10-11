import PDFViewer from '@/common/PDFViewer'
import { Separator } from '@/components/ui/separator'

export function Honors() {
    return (
        <div className="flex flex-row gap-12">
            <div className='w-6/12'>
                <PDFViewer />
            </div>
            <div>
                <div className='text-xl'>Pinch Analysis as a Modular Tool for the Analysis and Optimization of Industrial Chemical Processes</div>
                <Separator/>
            </div>

        </div>
    )
}