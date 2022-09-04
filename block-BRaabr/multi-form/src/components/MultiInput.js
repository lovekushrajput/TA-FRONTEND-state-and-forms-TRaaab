import React from 'react'

function MultiInput() {
    return (

        <div className='multi-form-div flex justify-center height-100vh'>
            <form action="" className='multi-form flex flex-column' >
                <label htmlFor="name">Text Input</label>
                <input type="text" placeholder="Text" id="name" />

                <label htmlFor="date">Date Input</label>
                <input type="datetime-local" id="date" />

                <label htmlFor="file">File Input</label>
                <input type="file" id="file" />

                <label htmlFor="readonly">Read-only Input</label>
                <input type="text" id="readonly" placeholder="This can only be copied" readOnly />

                <label htmlFor="disbale">Disabled Input</label>
                <input type="text" name="disable" className='bg-disabled' disabled />
                <>
                    <label htmlFor="textarea">Textarea</label>
                    <textarea id="textarea" cols="30" rows="3"></textarea>

                    <label htmlFor="textarea_disbaled">Textarea Disabled</label>
                    <textarea id="textarea_disbaled" cols="30" rows="3" className='bg-disabled' disabled></textarea>
                </>
            </form>
        </div>
    )
}

export default MultiInput