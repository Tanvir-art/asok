import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, Link } from 'lucide-react';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { showToast } from '../utils/toast';

const AddGallery = () => {
  const [formData, setFormData] = useState({
    title: '',
    type: 'photos',
    videoLink: ''
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const API_BASE = 'https://asokfoundationbd.com/api';
  const token = localStorage.getItem('token');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title) {
      showToast.error('Title is required');
      return;
    }

    if (formData.type === 'photos' && !image) {
      showToast.error('Image is required for photos');
      return;
    }

    if (formData.type === 'videos' && !formData.videoLink) {
      showToast.error('Video link is required for videos');
      return;
    }

    const loadingToast = showToast.loading('Adding gallery item...');

    try {
      setLoading(true);

      const submitData = new FormData();
      submitData.append('title', formData.title);
      submitData.append('type', formData.type);

      if (formData.type === 'photos' && image) {
        submitData.append('image', image);
      } else if (formData.type === 'videos') {
        submitData.append('videoLink', formData.videoLink);
      }

      await axios.post(`${API_BASE}/gallery`, submitData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });

      showToast.dismiss(loadingToast);
      showToast.success('Gallery item added successfully!');
      navigate('/admin');
    } catch (error) {
      console.error('Error adding gallery item:', error);
      showToast.dismiss(loadingToast);
      showToast.error('Failed to add gallery item. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
      <Toaster />
      <div className="w-full px-8 sm:px-12 lg:px-16">
        <div className="mb-8 text-center">
          <button
            onClick={() => navigate('/admin')}
            className="flex items-center justify-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Admin Panel
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Add Gallery Item</h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8  mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter title"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type *
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="photos">Photos</option>
                <option value="videos">Videos</option>
              </select>
            </div>

            {formData.type === 'photos' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="cursor-pointer text-blue-600 hover:text-blue-800"
                  >
                    Click to upload image
                  </label>
                  {image && (
                    <p className="mt-2 text-sm text-gray-600">
                      Selected: {image.name}
                    </p>
                  )}
                </div>
              </div>
            )}

            {formData.type === 'videos' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Video Link *
                </label>
                <div className="relative">
                  <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="url"
                    name="videoLink"
                    value={formData.videoLink}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://youtube.com/watch?v=..."
                  />
                </div>
              </div>
            )}

            <div className="flex gap-4 pt-6">
              <button
                type="button"
                onClick={() => navigate('/admin')}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? 'Adding...' : 'Add Gallery Item'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default AddGallery;
