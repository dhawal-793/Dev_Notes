import { Toaster } from 'react-hot-toast'

const ToastProvider = () => {
    return <Toaster position='top-right' reverseOrder={false} gutter={5} />
}

export default ToastProvider