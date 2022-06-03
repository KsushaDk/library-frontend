import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout';
import { AllBooksPage } from './pages/AllBooksPage';
import { SearchedBooksPage } from './pages/SearchedBooksPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { UserOrdersPage } from './pages/UserOrdersPage';
import { AddBookPage } from './pages/AddBookPage';
import { BookPage } from './pages/BookPage';

export const App = () => (
	<Routes>
		<Route path="/" element={<Layout />}>
			<Route index element={<AllBooksPage />} />
			<Route
				path="/5cd9a543-e4a3-4aa7-afa7-a78cf716ad9d"
				element={<BookPage />}
			/>
			<Route path="searched" element={<SearchedBooksPage />} />
			<Route path="orders" element={<UserOrdersPage />} />
		</Route>

		<Route path="addbook" element={<AddBookPage />} />
		<Route path="login" element={<LoginPage />} />
		<Route path="signup" element={<SignupPage />} />
	</Routes>
);
