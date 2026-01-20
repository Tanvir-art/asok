import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Users, Newspaper, LogOut, Heart, Image } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { showToast } from '../utils/toast';
import DeleteModal from '../Components/DeleteModal';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('committee');
  const [committees, setCommittees] = useState([]);
  const [news, setNews] = useState([]);
  const [families, setFamilies] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, item: null, loading: false });
  const navigate = useNavigate();

  const API_BASE = 'https://asokfoundationbd.com/api';
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    try {
      setLoading(true);
      if (activeTab === 'committee') {
        const response = await axios.get(`${API_BASE}/committees`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setCommittees(response.data.data || []);
      } else if (activeTab === 'news') {
        const response = await axios.get(`${API_BASE}/news`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setNews(response.data.data || []);
      } else if (activeTab === 'family') {
        const response = await axios.get(`${API_BASE}/families`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setFamilies(response.data.data || []);
      } else if (activeTab === 'gallery') {
        const response = await axios.get(`${API_BASE}/gallery`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setGallery(response.data.data || []);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        window.location.reload();
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  const handleAdd = () => {
    if (activeTab === 'committee') {
      navigate('/admin/add-committee');
    } else if (activeTab === 'news') {
      navigate('/admin/add-news');
    } else if (activeTab === 'family') {
      navigate('/admin/add-family');
    } else if (activeTab === 'gallery') {
      navigate('/admin/add-gallery');
    }
  };

  const handleEdit = (item) => {
    if (activeTab === 'committee') {
      navigate(`/admin/edit-committee/${item.id}`);
    } else if (activeTab === 'news') {
      navigate(`/admin/edit-news/${item.id}`);
    } else if (activeTab === 'family') {
      navigate(`/admin/edit-family/${item.id}`);
    }
  };

  const handleDelete = async (id) => {
    setDeleteModal({ isOpen: true, item: { id, type: activeTab }, loading: false });
  };

  const confirmDelete = async () => {
    const { id, type } = deleteModal.item;
    setDeleteModal(prev => ({ ...prev, loading: true }));
    
    const loadingToast = showToast.loading('Deleting...');
    
    try {
      const endpoint = type === 'committee' ? 'committees' : type === 'news' ? 'news' : type === 'family' ? 'families' : 'gallery';
      await axios.delete(`${API_BASE}/${endpoint}/${id}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      fetchData();
      showToast.dismiss(loadingToast);
      showToast.success(`${type === 'committee' ? 'Committee member' : type === 'news' ? 'News article' : type === 'family' ? 'Family member' : 'Gallery item'} deleted successfully!`);
      setDeleteModal({ isOpen: false, item: null, loading: false });
    } catch (error) {
      console.error('Error deleting:', error);
      showToast.dismiss(loadingToast);
      showToast.error('Failed to delete. Please try again.');
      setDeleteModal(prev => ({ ...prev, loading: false }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster />
      <div className="bg-white shadow-sm border-b">
        <div className="mx-auto px-16 lg:px-24 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setActiveTab('committee')}
                className={`flex items-center px-4 py-2 rounded-lg font-medium ${
                  activeTab === 'committee'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Users className="mr-2" size={20} />
                Committee
              </button>
              <button
                onClick={() => setActiveTab('news')}
                className={`flex items-center px-4 py-2 rounded-lg font-medium ${
                  activeTab === 'news'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Newspaper className="mr-2" size={20} />
                News
              </button>
              <button
                onClick={() => setActiveTab('family')}
                className={`flex items-center px-4 py-2 rounded-lg font-medium ${
                  activeTab === 'family'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Heart className="mr-2" size={20} />
                Family
              </button>
              <button
                onClick={() => setActiveTab('gallery')}
                className={`flex items-center px-4 py-2 rounded-lg font-medium ${
                  activeTab === 'gallery'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Image className="mr-2" size={20} />
                Gallery
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                <LogOut className="mr-2" size={20} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto px-16 lg:px-24 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">
              {activeTab === 'committee' ? 'Committee Members' : activeTab === 'news' ? 'News Articles' : activeTab === 'family' ? 'Family Members' : 'Gallery Items'}
            </h2>
            <button
              onClick={handleAdd}
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <Plus className="mr-2" size={20} />
              Add New
            </button>
          </div>

          <div className="p-6">
            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading...</p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {(activeTab === 'committee' ? committees : activeTab === 'news' ? news : activeTab === 'family' ? families : gallery).map((item) => (
                  <div key={item.id} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="aspect-w-16 aspect-h-9 mb-4">
                      {activeTab === 'gallery' && item.type === 'videos' ? (
                        <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-gray-500">Video: {item.videoLink}</span>
                        </div>
                      ) : (
                        <img 
                          src={`https://asokfoundationbd.com/${item.image}`}
                          alt={activeTab === 'committee' ? item.name : activeTab === 'news' ? item.title : activeTab === 'family' ? item.name : item.title}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg text-gray-900">
                        {activeTab === 'committee' ? item.name : activeTab === 'news' ? item.title : activeTab === 'family' ? item.name : item.title}
                      </h3>
                      
                      {activeTab === 'committee' ? (
                        <>
                          <p className="text-blue-600 font-medium">{item.position}</p>
                          <p className="text-sm text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block mb-1">
                            {item.type === 'kendrio' ? 'কেন্দ্রীয়' : 
                             item.type === 'vivag' ? 'বিভাগীয়' : 
                             item.type === 'jela' ? 'জেলা' : 'উপজেলা'}
                          </p>
                          <p className="text-gray-600 text-sm">{item.address}</p>
                        </>
                      ) : activeTab === 'news' ? (
                        <p className="text-gray-600 text-sm line-clamp-3">{item.description}</p>
                      ) : activeTab === 'family' ? (
                        <p className="text-blue-600 font-medium">{item.position}</p>
                      ) : (
                        <p className="text-sm text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">
                          {item.type === 'photos' ? 'Photo' : 'Video'}
                        </p>
                      )}
                    </div>

                    <div className="flex justify-end space-x-2 mt-4">
                      {activeTab !== 'gallery' && (
                        <button
                          onClick={() => handleEdit(item)}
                          className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg"
                        >
                          <Edit size={16} />
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-2 text-red-600 hover:bg-red-100 rounded-lg"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!loading && (activeTab === 'committee' ? committees : activeTab === 'news' ? news : activeTab === 'family' ? families : gallery).length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  {activeTab === 'committee' ? <Users size={48} /> : activeTab === 'news' ? <Newspaper size={48} /> : activeTab === 'family' ? <Heart size={48} /> : <Image size={48} />}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No {activeTab === 'committee' ? 'committee members' : activeTab === 'news' ? 'news articles' : activeTab === 'family' ? 'family members' : 'gallery items'} found
                </h3>
                <p className="text-gray-600 mb-4">
                  Get started by adding your first {activeTab === 'committee' ? 'committee member' : activeTab === 'news' ? 'news article' : activeTab === 'family' ? 'family member' : 'gallery item'}.
                </p>
                <button
                  onClick={handleAdd}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Plus className="mr-2" size={20} />
                  Add {activeTab === 'committee' ? 'Committee Member' : activeTab === 'news' ? 'News Article' : activeTab === 'family' ? 'Family Member' : 'Gallery Item'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <DeleteModal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, item: null, loading: false })}
        onConfirm={confirmDelete}
        loading={deleteModal.loading}
        title="Confirm Delete"
        message={`Are you sure you want to delete this ${deleteModal.item?.type === 'committee' ? 'committee member' : deleteModal.item?.type === 'news' ? 'news article' : deleteModal.item?.type === 'family' ? 'family member' : 'gallery item'}? This action cannot be undone.`}
      />
    </div>
  );
};

export default AdminPanel;
