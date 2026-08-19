import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Facebook, Instagram } from './SocialIcons';
import logoConsejo from '../assets/logo-consejo.webp';
import './Header.css';

const Header = () => {


    return (
        <header className="glass main-header">
            <div className="container header-container">
                {/* Logo Branding */}
                <Link to="/" className="brand-logo" onClick={() => setIsOpen(false)}>
                    <div className="logo-icon-wrapper">
                        <picture>
                            <source srcSet={logoConsejo} type="image/webp" />
                            <img src={logoConsejo} alt="Logo del Honorable Concejo Deliberante de Alberdi" className="header-logo-img" />
                        </picture>
                    </div>
                    <div className="brand-text">
                        <span className="brand-title serif-title">Concejo Deliberante</span>
                        <span className="brand-subtitle">Portal Oficial Legislativo</span>
                    </div>
                </Link>



            </div>

        </header>
    );
};

export default Header;
