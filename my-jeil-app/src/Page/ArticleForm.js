import React, { useState } from 'react';

const ArticleForm = () => {
    const [formData, setFormData] = useState({
        // articleCode: '',
        // articleType: 'S',
        // thaiTitle: '',
        // englishTitle: '',
        // language: 'EN',
        // authorType: 'in',
        // submissionDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className='m-12 p-12'>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label>รหัสบทความ:</label>
                    <input
                        type="text"
                        name="articleCode"
                        value={formData.articleCode}
                        onChange={handleChange}
                        className="border rounded p-2 w-full"
                        placeholder='โปรดระบุรหัสบทความ'
                    />
                </div>
                <div>
                    <label>ประเภทบทความ:</label>
                    <select
                        name="articleType"
                        placeholder='Pls choose'
                        value={formData.articleType}
                        onChange={handleChange}
                        className="border rounded p-2 w-full"
                    >
                        <option value="" disabled selected hidden>โปรดเลือกประเภทบทความ</option>
                        <option value="R">R</option>
                        <option value="S">S</option>
                    </select>
                </div>
                <div>
                    <label>ชื่อภาษาไทย:</label>
                    <input
                        type="text"
                        name="thaiTitle"
                        value={formData.thaiTitle}
                        onChange={handleChange}
                        className="border rounded p-2 w-full h-24"
                        placeholder='โปรดระบุชื่อภาษาไทย'
                    />
                </div>
                <div>
                    <label>ชื่อภาษาอังกฤษ:</label>
                    <input
                        type="text"
                        name="englishTitle"
                        value={formData.englishTitle}
                        onChange={handleChange}
                        className="border rounded p-2 w-full h-24"
                        placeholder='โปรดระบุภาษาอังกฤษ'
                    />
                </div>
                <div>
                    <label>ภาษา:</label>
                    <select
                        name="language"
                        value={formData.language}
                        onChange={handleChange}
                        className="border rounded p-2 w-full"
                    >
                        <option value="" disabled selected hidden>โปรดเลือกภาษา</option>
                        <option value="TH">TH</option>
                        <option value="EN">EN</option>
                    </select>
                </div>
                <div>
                    <label>ประเภทผู้เขียน:</label>
                    <select
                        name="authorType"
                        value={formData.authorType}
                        onChange={handleChange}
                        className="border rounded p-2 w-full placeholder"
                    >
                        <option value="" disabled selected hidden>โปรดเลือกประเภทผู้เขียน</option>
                        <option value="in">in</option>
                        <option value="out">out</option>
                    </select>
                </div>
                <div>
                    <label>วันที่จัดส่ง:</label>
                    <input
                        type="date"
                        name="submissionDate"
                        value={formData.submissionDate}
                        onChange={handleChange}
                        className="border rounded p-2 w-32 text-center"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
            </form>
        </div>
    );
};

export default ArticleForm;
