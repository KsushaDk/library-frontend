import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export const Layout = () => (
	<div className="container">
		<Navigation />
		<Outlet />
		<Footer />
	</div>
);
