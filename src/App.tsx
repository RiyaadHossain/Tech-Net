import { useEffect } from 'react';
import { Toaster } from './components/ui/Toaster';
import MainLayout from './layouts/MainLayout';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import { useAppDispatch } from './redux/hook';
import { setLoading, setUser } from './redux/features/user/userSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      dispatch(setUser(user?.email));
    });
    dispatch(setLoading(false));
  }, [dispatch]);

  return (
    <div>
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;
