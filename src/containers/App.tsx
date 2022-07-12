import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PencilAltIcon } from '@heroicons/react/solid';

import { AppLayout } from '../layouts/AppLayout';
import { AppBar } from '../components/AppBar';
import { TabBars, TabBar } from '../components/Tabs';
import { Divider } from '../components/Divider';
import { getInitialData } from '../utils';
import { NotesMasonry } from '../pages/NotesMasonry';
import { Footer } from '../components/Footer';
import { FloatingActionButton } from '../components/FloatingActionButton';

function App() {
  const [notes] = React.useState(getInitialData());

  const archivedNotes = notes.filter((note) => note.archived);
  const unarchivedNotes = notes.filter((note) => !note.archived);

  return (
    <AppLayout>
      <AppBar />

      <TabBars>
        <TabBar to="/">Home</TabBar>
        <Divider direction="vertical" />
        <TabBar to="/archived">Archived</TabBar>
      </TabBars>

      <main className="flex-1 mb-8">
        <Routes>
          <Route path="/" element={<NotesMasonry notes={unarchivedNotes} />} />
          <Route path="/archived" element={<NotesMasonry notes={archivedNotes} />} />
        </Routes>
      </main>

      <Divider />

      <Footer />

      <FloatingActionButton StartIcon={PencilAltIcon}>Add new note</FloatingActionButton>
    </AppLayout>
  );
}

export { App };
