import fetchAPI from "@/service/api/fetchAPI";
import { toast as ReactToast } from "react-toastify";
import { base64ToBlob } from '@/service/helper/commonFunctions';
import { saveAs } from 'file-saver';

export const downloadActions = async (id, fileName) => {
    ReactToast.loading('Downloading...', { className: 'custom-toast' })
    let data = {
        "fileId": id,
    }
    try {
        await fetchAPI(`/elibrary/document/download`, 'POST', data, 'application/json',)
            .then((response) => {
                const blobData = base64ToBlob(response);
                saveAs(blobData, fileName);
                response && ReactToast.dismiss()
                ReactToast.success('Download Successfully!...')
            }
            )
    }
    catch (error) {
        ReactToast.dismiss()
        console.log(error, 'error logged')
    }
}