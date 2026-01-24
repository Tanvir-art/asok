import React, { useState, useEffect } from 'react';
import { ArrowLeft, Upload } from 'lucide-react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { showToast } from '../utils/toast';

const EditNews = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [currentImage, setCurrentImage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const API_BASE = 'https://asokfoundationbd.com/backend/api';
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchNews();
  }, [id]);

  const fetchNews = async () => {
    try {
      const response = await axios.get(`${API_BASE}/news/${id}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = response.data.data;
      setFormData({
        title: data.title,
        description: data.description
      });
      setCurrentImage(data.image);
    } catch (error) {
      console.error('Error fetching news:', error);
      showToast.error('Failed to load news data');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      
      if (imageFile) {
        formDataToSend.append('image', imageFile);
      }

      await axios.put(`${API_BASE}/news/${id}`, formDataToSend, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        }
      });

      showToast.success('News updated successfully!');
      navigate('/admin');
    } catch (error) {
      console.error('Error updating news:', error);
      showToast.error('Failed to update news');
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
            <h1 className="text-2xl font-bold text-gray-900">Edit News</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 h-32"
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
                {loading ? 'Updating...' : 'Update News'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditNews;
