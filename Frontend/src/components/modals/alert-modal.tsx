'use client'

import { FC, useEffect, useState } from 'react'

import Modal from '@/components/ui/modal'
import { Button } from '@/components/ui/button'

interface AlertModalProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
}

const AlertModal: FC<AlertModalProps> = ({ isOpen, onClose, onConfirm }) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <Modal
            title='Are You Sure?'
            description='This action cannot be undone.'
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className='flex items-center justify-end w-full pt-6 space-x-2'>
                <Button  variant="outline" onClick={onClose}>
                    Cancel
                </Button>
                <Button  variant="destructive" onClick={onConfirm}>
                    Continue
                </Button>
            </div>
        </Modal>
    )
}

export default AlertModal