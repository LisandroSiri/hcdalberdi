import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Home, Users, FileText, ChevronRight } from 'lucide-react';
import logoConsejo from '../assets/logo-consejo.webp';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });
    const location = useLocation();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    const navItems = [
        { path: '/', label: 'Inicio', icon: Home, exact: true },
        { path: '/concejales', label: 'Concejales', icon: Users, exact: false },
        { path: '/mesa-de-entrada-digital', label: 'Mesa de Entrada', icon: FileText, exact: false }
    ];

    const isPathActive = (itemPath, exact) => {
        if (exact) return location.pathname === itemPath;
        return location.pathname.startsWith(itemPath);
    };

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

                {/* Desktop Navigation */}
                <nav className="desktop-nav" aria-label="Navegación principal">
                    <ul className="nav-list">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const active = isPathActive(item.path, item.exact);
                            return (
                                <li key={item.path} className="nav-item">
                                    <NavLink
                                        to={item.path}
                                        className={`nav-link-item ${active ? 'active' : ''}`}
                                        end={item.exact}
                                    >
                                        <Icon className="nav-icon" />
                                        <span>{item.label}</span>
                                        {active && (
                                            <motion.div
                                                layoutId="activeHeaderTab"
                                                className="active-pill"
                                                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Header Actions */}
                <div className="header-actions">
                    <button
                        type="button"
                        className="mobile-menu-btn"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Abrir menú de navegación"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            className="mobile-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            className="mobile-nav-drawer"
                            initial={{ opacity: 0, y: -15, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -15, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                        >
                            <nav aria-label="Navegación móvil">
                                <ul className="mobile-nav-list">
                                    {navItems.map((item) => {
                                        const Icon = item.icon;
                                        const active = isPathActive(item.path, item.exact);
                                        return (
                                            <li key={item.path}>
                                                <NavLink
                                                    to={item.path}
                                                    className={`mobile-nav-link ${active ? 'active' : ''}`}
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    <div className="mobile-nav-item-left">
                                                        <Icon size={20} />
                                                        <span>{item.label}</span>
                                                    </div>
                                                    <ChevronRight size={18} opacity={active ? 1 : 0.4} />
                                                </NavLink>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
