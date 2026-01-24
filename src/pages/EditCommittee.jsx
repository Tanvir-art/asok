import React, { useState, useEffect } from 'react';
import { ArrowLeft, Upload } from 'lucide-react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { showToast } from '../utils/toast';

const EditCommittee = () => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    address: '',
    type: '',
    location: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [currentImage, setCurrentImage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const API_BASE = 'https://asokfoundationbd.com/backend/api';
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchCommittee();
  }, [id]);

  const fetchCommittee = async () => {
    try {
      const response = await axios.get(`${API_BASE}/committees/${id}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = response.data.data;
      setFormData({
        name: data.name,
        position: data.position,
        address: data.address,
        type: data.type,
        location: data.location || ''
      });
      setCurrentImage(data.image);
    } catch (error) {
      console.error('Error fetching committee:', error);
      showToast.error('Failed to load committee data');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('type', formData.type);
      
      if (formData.location) {
        formDataToSend.append('location', formData.location);
      }
      
      if (imageFile) {
        formDataToSend.append('image', imageFile);
      }

      await axios.put(`${API_BASE}/committees/${id}`, formDataToSend, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        }
      });

      showToast.success('Committee member updated successfully!');
      navigate('/admin');
    } catch (error) {
      console.error('Error updating committee:', error);
      showToast.error('Failed to update committee member');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Toaster />
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-6">
            <button
              onClick={() => navigate('/admin')}
              className="flex items-center text-gray-600 hover:text-gray-800 mr-4"
            >
              <ArrowLeft size={20} className="mr-1" />
              Back to Admin
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Edit Committee Member</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
              <input
                type="text"
                value={formData.position}
                onChange={(e) => setFormData({...formData, position: e.target.value})}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Committee Type</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value, location: ''})}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Committee Type</option>
                <option value="kendrio">কেন্দ্রীয়</option>
                <option value="vivag">বিভাগীয়</option>
                <option value="jela">জেলা</option>
                <option value="upozila">উপজেলা</option>
              </select>
            </div>

            {formData.type && formData.type !== 'kendrio' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {formData.type === 'vivag' ? 'বিভাগের নাম' : 
                   formData.type === 'jela' ? 'জেলার নাম' : 'উপজেলার নাম'}
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder={
                    formData.type === 'vivag' ? 'বিভাগের নাম লিখুন' : 
                    formData.type === 'jela' ? 'জেলার নাম লিখুন' : 'উপজেলার নাম লিখুন'
                  }
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
              {currentImage && (
                <div className="mb-4">
                  <img
                    src={`https://asokfoundationbd.com/${currentImage}`}
                    alt="Current"
                    className="w-32 h-32 object-cover rounded-lg border"
                  />
                  <p className="text-sm text-gray-600 mt-2">Current Image</p>
                </div>
              )}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files[0])}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center">
                  <Upload className="text-gray-400 mb-2" size={32} />
                  <span className="text-sm text-gray-600">
                    {imageFile ? imageFile.name : 'Click to upload new image (optional)'}
                  </span>
                </label>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => navigate('/admin')}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? 'Updating...' : 'Update Committee Member'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCommittee;
