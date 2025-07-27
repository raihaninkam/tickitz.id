
        // Dataset yang diperkaya dengan pola yang berbeda untuk setiap film
        const salesDataSets = {
            'Movies Name': {
                Monthly: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [400, 300, 600, 800, 700, 500, 650, 750, 600, 800, 900, 750],
                    title: 'All Movies Overview',
                    chartType: 'line',
                    colors: {
                        background: 'rgba(59, 130, 246, 0.3)',
                        border: 'rgba(59, 130, 246, 1)'
                    }
                },
                Weekly: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    data: [1200, 1450, 1100, 1680],
                    title: 'All Movies Overview',
                    chartType: 'bar',
                    colors: {
                        background: 'rgba(59, 130, 246, 0.7)',
                        border: 'rgba(59, 130, 246, 1)'
                    }
                },
                Daily: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    data: [120, 95, 180, 220, 280, 350, 310],
                    title: 'All Movies Overview',
                    chartType: 'line',
                    colors: {
                        background: 'rgba(59, 130, 246, 0.3)',
                        border: 'rgba(59, 130, 246, 1)'
                    }
                },
                Yearly: {
                    labels: ['2020', '2021', '2022', '2023', '2024'],
                    data: [5200, 6800, 7500, 8200, 9100],
                    title: 'All Movies Overview',
                    chartType: 'bar',
                    colors: {
                        background: 'rgba(59, 130, 246, 0.7)',
                        border: 'rgba(59, 130, 246, 1)'
                    }
                }
            },
            'Avengers Endgame': {
                Monthly: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [850, 920, 1200, 1500, 1800, 1600, 1400, 1300, 1100, 900, 800, 750],
                    title: 'Avengers Endgame',
                    chartType: 'line',
                    colors: {
                        background: 'rgba(220, 38, 127, 0.3)',
                        border: 'rgba(220, 38, 127, 1)'
                    }
                },
                Weekly: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    data: [2500, 3200, 2800, 2100],
                    title: 'Avengers Endgame',
                    chartType: 'bar',
                    colors: {
                        background: 'rgba(220, 38, 127, 0.7)',
                        border: 'rgba(220, 38, 127, 1)'
                    }
                },
                Daily: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    data: [320, 280, 450, 520, 680, 850, 750],
                    title: 'Avengers Endgame',
                    chartType: 'doughnut',
                    colors: {
                        background: ['#dc2626', '#ea580c', '#d97706', '#ca8a04', '#65a30d', '#16a34a', '#059669'],
                        border: ['#dc2626', '#ea580c', '#d97706', '#ca8a04', '#65a30d', '#16a34a', '#059669']
                    }
                },
                Yearly: {
                    labels: ['2020', '2021', '2022', '2023', '2024'],
                    data: [8500, 12000, 15000, 10000, 6000],
                    title: 'Avengers Endgame',
                    chartType: 'bar',
                    colors: {
                        background: 'rgba(220, 38, 127, 0.7)',
                        border: 'rgba(220, 38, 127, 1)'
                    }
                }
            },
            'Spider-Man': {
                Monthly: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [320, 380, 450, 520, 480, 410, 550, 620, 580, 650, 700, 680],
                    title: 'Spider-Man No Way Home',
                    chartType: 'line',
                    colors: {
                        background: 'rgba(239, 68, 68, 0.3)',
                        border: 'rgba(239, 68, 68, 1)'
                    }
                },
                Weekly: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    data: [1800, 2200, 1950, 2400],
                    title: 'Spider-Man No Way Home',
                    chartType: 'polarArea',
                    colors: {
                        background: ['rgba(239, 68, 68, 0.7)', 'rgba(59, 130, 246, 0.7)', 'rgba(34, 197, 94, 0.7)', 'rgba(251, 146, 60, 0.7)'],
                        border: ['rgba(239, 68, 68, 1)', 'rgba(59, 130, 246, 1)', 'rgba(34, 197, 94, 1)', 'rgba(251, 146, 60, 1)']
                    }
                },
                Daily: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    data: [180, 160, 220, 280, 350, 420, 380],
                    title: 'Spider-Man No Way Home',
                    chartType: 'line',
                    colors: {
                        background: 'rgba(239, 68, 68, 0.3)',
                        border: 'rgba(239, 68, 68, 1)'
                    }
                },
                Yearly: {
                    labels: ['2020', '2021', '2022', '2023', '2024'],
                    data: [3200, 5800, 8500, 12000, 9500],
                    title: 'Spider-Man No Way Home',
                    chartType: 'bar',
                    colors: {
                        background: 'rgba(239, 68, 68, 0.7)',
                        border: 'rgba(239, 68, 68, 1)'
                    }
                }
            },
            'The Batman': {
                Monthly: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [450, 520, 480, 640, 750, 690, 810, 760, 820, 880, 950, 720],
                    title: 'The Batman',
                    chartType: 'line',
                    colors: {
                        background: 'rgba(75, 85, 99, 0.3)',
                        border: 'rgba(75, 85, 99, 1)'
                    }
                },
                Weekly: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    data: [2100, 1800, 2300, 1950],
                    title: 'The Batman',
                    chartType: 'radar',
                    colors: {
                        background: 'rgba(75, 85, 99, 0.3)',
                        border: 'rgba(75, 85, 99, 1)'
                    }
                },
                Daily: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    data: [200, 180, 280, 320, 450, 520, 480],
                    title: 'The Batman',
                    chartType: 'line',
                    colors: {
                        background: 'rgba(75, 85, 99, 0.3)',
                        border: 'rgba(75, 85, 99, 1)'
                    }
                },
                Yearly: {
                    labels: ['2020', '2021', '2022', '2023', '2024'],
                    data: [0, 0, 8500, 11000, 7500],
                    title: 'The Batman',
                    chartType: 'bar',
                    colors: {
                        background: 'rgba(75, 85, 99, 0.7)',
                        border: 'rgba(75, 85, 99, 1)'
                    }
                }
            },
            'Fast & Furious': {
                Monthly: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [680, 720, 580, 640, 750, 690, 810, 760, 820, 880, 950, 720],
                    title: 'Fast & Furious X',
                    chartType: 'line',
                    colors: {
                        background: 'rgba(251, 146, 60, 0.3)',
                        border: 'rgba(251, 146, 60, 1)'
                    }
                },
                Weekly: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    data: [2800, 3100, 2600, 2200],
                    title: 'Fast & Furious X',
                    chartType: 'doughnut',
                    colors: {
                        background: ['rgba(251, 146, 60, 0.8)', 'rgba(239, 68, 68, 0.8)', 'rgba(59, 130, 246, 0.8)', 'rgba(34, 197, 94, 0.8)'],
                        border: ['rgba(251, 146, 60, 1)', 'rgba(239, 68, 68, 1)', 'rgba(59, 130, 246, 1)', 'rgba(34, 197, 94, 1)']
                    }
                },
                Daily: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    data: [250, 220, 350, 420, 580, 650, 600],
                    title: 'Fast & Furious X',
                    chartType: 'line',
                    colors: {
                        background: 'rgba(251, 146, 60, 0.3)',
                        border: 'rgba(251, 146, 60, 1)'
                    }
                },
                Yearly: {
                    labels: ['2020', '2021', '2022', '2023', '2024'],
                    data: [7200, 8500, 9200, 10500, 8800],
                    title: 'Fast & Furious X',
                    chartType: 'bar',
                    colors: {
                        background: 'rgba(251, 146, 60, 0.7)',
                        border: 'rgba(251, 146, 60, 1)'
                    }
                }
            },
            'Top Gun Maverick': {
                Monthly: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [200, 250, 400, 650, 850, 1200, 1400, 1100, 800, 600, 400, 300],
                    title: 'Top Gun: Maverick',
                    chartType: 'line',
                    colors: {
                        background: 'rgba(34, 197, 94, 0.3)',
                        border: 'rgba(34, 197, 94, 1)'
                    }
                },
                Weekly: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    data: [1500, 2800, 3200, 2100],
                    title: 'Top Gun: Maverick',
                    chartType: 'polarArea',
                    colors: {
                        background: ['rgba(34, 197, 94, 0.7)', 'rgba(59, 130, 246, 0.7)', 'rgba(239, 68, 68, 0.7)', 'rgba(251, 146, 60, 0.7)'],
                        border: ['rgba(34, 197, 94, 1)', 'rgba(59, 130, 246, 1)', 'rgba(239, 68, 68, 1)', 'rgba(251, 146, 60, 1)']
                    }
                },
                Daily: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    data: [150, 180, 250, 320, 450, 520, 480],
                    title: 'Top Gun: Maverick',
                    chartType: 'line',
                    colors: {
                        background: 'rgba(34, 197, 94, 0.3)',
                        border: 'rgba(34, 197, 94, 1)'
                    }
                },
                Yearly: {
                    labels: ['2020', '2021', '2022', '2023', '2024'],
                    data: [0, 0, 9500, 8200, 5800],
                    title: 'Top Gun: Maverick',
                    chartType: 'bar',
                    colors: {
                        background: 'rgba(34, 197, 94, 0.7)',
                        border: 'rgba(34, 197, 94, 1)'
                    }
                }
            }
        };

        // Dataset tiket yang diperkaya dengan berbagai kategori dan lokasi
        const ticketDataSets = {
            'Category': {
                'Location': {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [250, 200, 400, 500, 450, 300, 400, 500, 350, 550, 650, 500],
                    title: 'All Categories, All Locations',
                    chartType: 'line',
                    colors: {
                        background: 'rgba(59, 130, 246, 0.3)',
                        border: 'rgba(59, 130, 246, 1)'
                    }
                }
            },
            'Adventure': {
                'Jakarta': {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [480, 520, 450, 580, 620, 550, 680, 720, 650, 780, 820, 750],
                    title: 'Adventure Movies in Jakarta',
                    chartType: 'bar',
                    colors: {
                        background: 'rgba(220, 38, 127, 0.7)',
                        border: 'rgba(220, 38, 127, 1)'
                    }
                },
                'Bandung': {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [350, 380, 320, 450, 480, 420, 550, 580, 520, 650, 680, 620],
                    title: 'Adventure Movies in Bandung',
                    chartType: 'line',
                    colors: {
                        background: 'rgba(220, 38, 127, 0.3)',
                        border: 'rgba(220, 38, 127, 1)'
                    }
                },
                'Purwokerto': {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [180, 220, 150, 280, 320, 250, 380, 420, 350, 480, 520, 450],
                    title: 'Adventure Movies in Purwokerto',
                    chartType: 'doughnut',
                    colors: {
                        background: ['#dc2626', '#ea580c', '#d97706', '#ca8a04', '#65a30d', '#16a34a', '#059669', '#0891b2', '#0284c7', '#2563eb', '#4f46e5', '#7c3aed'],
                        border: ['#dc2626', '#ea580c', '#d97706', '#ca8a04', '#65a30d', '#16a34a', '#059669', '#0891b2', '#0284c7', '#2563eb', '#4f46e5', '#7c3aed']
                    }
                },
                'Surabaya': {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [420, 450, 380, 520, 560, 490, 620, 660, 590, 720, 760, 690],
                    title: 'Adventure Movies in Surabaya',
                    chartType: 'polarArea',
                    colors: {
                        background: ['rgba(220, 38, 127, 0.8)', 'rgba(239, 68, 68, 0.8)', 'rgba(251, 146, 60, 0.8)', 'rgba(34, 197, 94, 0.8)', 'rgba(59, 130, 246, 0.8)', 'rgba(147, 51, 234, 0.8)', 'rgba(236, 72, 153, 0.8)', 'rgba(14, 165, 233, 0.8)', 'rgba(34, 197, 94, 0.8)', 'rgba(251, 146, 60, 0.8)', 'rgba(239, 68, 68, 0.8)', 'rgba(220, 38, 127, 0.8)'],
                        border: ['rgba(220, 38, 127, 1)', 'rgba(239, 68, 68, 1)', 'rgba(251, 146, 60, 1)', 'rgba(34, 197, 94, 1)', 'rgba(59, 130, 246, 1)', 'rgba(147, 51, 234, 1)', 'rgba(236, 72, 153, 1)', 'rgba(14, 165, 233, 1)', 'rgba(34, 197, 94, 1)', 'rgba(251, 146, 60, 1)', 'rgba(239, 68, 68, 1)', 'rgba(220, 38, 127, 1)']
                    }
                },
                'Medan': {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [280, 320, 250, 380, 420, 350, 480, 520, 450, 580, 620, 550],
                    title: 'Adventure Movies in Medan',
                    chartType: 'radar',
                    colors: {
                        background: 'rgba(220, 38, 127, 0.3)',
                        border: 'rgba(220, 38, 127, 1)'
                    }
                }
            },
            'Drama': {
                'Jakarta': {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [320, 280, 380, 420, 380, 340, 450, 480, 420, 520, 550, 480],
                    title: 'Drama Movies in Jakarta',
                    chartType: 'line',
                    colors: {
                        background: 'rgba(75, 85, 99, 0.3)',
                        border: 'rgba(75, 85, 99, 1)'
                    }
                },
                'Bandung': {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [220, 180, 280, 320, 280, 240, 350, 380, 320, 420, 450, 380],
                    title: 'Drama Movies in Bandung',
                    chartType: 'bar',
                    colors: {
                        background: 'rgba(75, 85, 99, 0.7)',
                        border: 'rgba(75, 85, 99, 1)'
                    }
                },
                'Purwokerto': {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [120, 90, 150, 180, 150, 110, 200, 230, 180, 270, 300, 230],
                    title: 'Drama Movies in Purwokerto',
                    chartType: 'line',
                    colors: {
                        background: 'rgba(75, 85, 99, 0.3)',
                        border: 'rgba(75, 85, 99, 1)'
                    }
                },
                'Surabaya': {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [280, 240, 340, 380, 340, 300, 410, 440, 380, 480, 510, 440],
                    title: 'Drama Movies in Surabaya',
                    chartType: 'doughnut',
                    colors: {
                        background: ['#1f2937', '#374151', '#4b5563', '#6b7280', '#9ca3af', '#d1d5db', '#e5e7eb', '#f3f4f6', '#f9fafb', '#ffffff', '#e5e7eb', '#d1d5db'],
                        border: ['#1f2937', '#374151', '#4b5563', '#6b7280', '#9ca3af', '#d1d5db', '#e5e7eb', '#f3f4f6', '#f9fafb', '#ffffff', '#e5e7eb', '#d1d5db']
                    }
                },
                'Medan': {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [200, 160, 260, 300, 260, 220, 330, 360, 300, 400, 430, 360],
                    title: 'Drama Movies in Medan',
                    chartType: 'polarArea',
                    colors: {
                        background: ['rgba(75, 85, 99, 0.8)', 'rgba(107, 114, 128, 0.8)', 'rgba(156, 163, 175, 0.8)', 'rgba(209, 213, 219, 0.8)', 'rgba(229, 231, 235, 0.8)', 'rgba(243, 244, 246, 0.8)', 'rgba(249, 250, 251, 0.8)', 'rgba(255, 255, 255, 0.8)', 'rgba(249, 250, 251, 0.8)', 'rgba(243, 244, 246, 0.8)', 'rgba(229, 231, 235, 0.8)', 'rgba(209, 213, 219, 0.8)'],
                        border: ['rgba(75, 85, 99, 1)', 'rgba(107, 114, 128, 1)', 'rgba(156, 163, 175, 1)', 'rgba(209, 213, 219, 1)', 'rgba(229, 231, 235, 1)', 'rgba(243, 244, 246, 1)', 'rgba(249, 250, 251, 1)', 'rgba(255, 255, 255, 1)', 'rgba(249, 250, 251, 1)', 'rgba(243, 244, 246, 1)', 'rgba(229, 231, 235, 1)', 'rgba(209, 213, 219, 1)']
                    }
                }
            },
            'Comedy': {
                'Jakarta': {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [420, 380, 480, 520, 480, 440, 550, 580, 520, 620, 650, 580],
                    title: 'Comedy Movies in Jakarta',
                    chartType: 'bar',
                    colors: {
                        background: 'rgba(251, 191, 36, 0.7)',
                        border: 'rgba(251, 191, 36, 1)'
                    }
                },
                'Bandung': {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [320, 280, 380, 420, 380, 340, 450, 480, 420, 520, 550, 480],
                    title: 'Comedy Movies in Bandung',
                    chartType: 'line',
                    colors: {
                        background: 'rgba(251, 191, 36, 0.3)',
                        border: 'rgba(251, 191, 36, 1)'
                    }
                },
                'Purwokerto': {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [220, 180, 280, 320, 280, 240, 350, 380, 320, 420, 450, 380],
                    title: 'Comedy Movies in Purwokerto',
                    chartType: 'radar',
                    colors: {
                        background: 'rgba(251, 191, 36, 0.3)',
                        border: 'rgba(251, 191, 36, 1)'
                    }
                },
                'Surabaya': {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [380, 340, 440, 480, 440, 400, 510, 540, 480, 580, 610, 540],
                    title: 'Comedy Movies in Surabaya',
                    chartType: 'doughnut',
                    colors: {
                        background: ['#f59e0b', '#d97706', '#b45309', '#92400e', '#78350f', '#451a03', '#1c0701', '#451a03', '#78350f', '#92400e', '#b45309', '#d97706'],
                        border: ['#f59e0b', '#d97706', '#b45309', '#92400e', '#78350f', '#451a03', '#1c0701', '#451a03', '#78350f', '#92400e', '#b45309', '#d97706']
                    }
                },
                'Medan': {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [280, 240, 340, 380, 340, 300, 410, 440, 380, 480, 510, 440],
                    title: 'Comedy Movies in Medan',
                    chartType: 'polarArea',
                    colors: {
                        background: ['rgba(251, 191, 36, 0.8)', 'rgba(217, 119, 6, 0.8)', 'rgba(180, 83, 9, 0.8)', 'rgba(146, 64, 14, 0.8)', 'rgba(120, 53, 15, 0.8)', 'rgba(69, 26, 3, 0.8)', 'rgba(28, 7, 1, 0.8)', 'rgba(69, 26, 3, 0.8)', 'rgba(120, 53, 15, 0.8)', 'rgba(146, 64, 14, 0.8)', 'rgba(180, 83, 9, 0.8)', 'rgba(217, 119, 6, 0.8)'],
                        border: ['rgba(251, 191, 36, 1)', 'rgba(217, 119, 6, 1)', 'rgba(180, 83, 9, 1)', 'rgba(146, 64, 14, 1)', 'rgba(120, 53, 15, 1)', 'rgba(69, 26, 3, 1)', 'rgba(28, 7, 1, 1)', 'rgba(69, 26, 3, 1)', 'rgba(120, 53, 15, 1)', 'rgba(146, 64, 14, 1)', 'rgba(180, 83, 9, 1)', 'rgba(217, 119, 6, 1)']
                    }
                }
            },
            'Horror': {
                'Jakarta': {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [180, 160, 250, 220, 280, 320, 350, 380, 320, 420, 580, 450],
                    title: 'Horror Movies in Jakarta',
                    chartType: 'line',
                    colors: {
                        background: 'rgba(239, 68, 68, 0.3)',
                        border: 'rgba(239, 68, 68, 1)'
                    }
                },
                'Bandung': {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [120, 100, 180, 150, 200, 240, 270, 300, 250, 320, 450, 350],
                    title: 'Horror Movies in Bandung',
                    chartType: 'bar',
                    colors: {
                        background: 'rgba(239, 68, 68, 0.7)',
                        border: 'rgba(239, 68, 68, 1)'
                    }
                },
                'Purwokerto': {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [80, 60, 120, 100, 140, 180, 200, 220, 180, 250, 380, 280],
                    title: 'Horror Movies in Purwokerto',
                    chartType: 'doughnut',
                    colors: {
                        background: ['#dc2626', '#b91c1c', '#991b1b', '#7f1d1d', '#450a0a', '#1c0a0a', '#450a0a', '#7f1d1d', '#991b1b', '#b91c1c', '#dc2626', '#ef4444'],
                        border: ['#dc2626', '#b91c1c', '#991b1b', '#7f1d1d', '#450a0a', '#1c0a0a', '#450a0a', '#7f1d1d', '#991b1b', '#b91c1c', '#dc2626', '#ef4444']
                    }
                },
                'Surabaya': {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [150, 130, 220, 190, 250, 290, 320, 350, 290, 380, 520, 420],
                    title: 'Horror Movies in Surabaya',
                    chartType: 'radar',
                    colors: {
                        background: 'rgba(239, 68, 68, 0.3)',
                        border: 'rgba(239, 68, 68, 1)'
                    }
                },
                'Medan': {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [100, 80, 150, 120, 180, 220, 250, 280, 230, 300, 420, 320],
                    title: 'Horror Movies in Medan',
                    chartType: 'polarArea',
                    colors: {
                        background: ['rgba(239, 68, 68, 0.8)', 'rgba(220, 38, 38, 0.8)', 'rgba(185, 28, 28, 0.8)', 'rgba(153, 27, 27, 0.8)', 'rgba(127, 29, 29, 0.8)', 'rgba(69, 10, 10, 0.8)', 'rgba(28, 10, 10, 0.8)', 'rgba(69, 10, 10, 0.8)', 'rgba(127, 29, 29, 0.8)', 'rgba(153, 27, 27, 0.8)', 'rgba(185, 28, 28, 0.8)', 'rgba(220, 38, 38, 0.8)'],
                        border: ['rgba(239, 68, 68, 1)', 'rgba(220, 38, 38, 1)', 'rgba(185, 28, 28, 1)', 'rgba(153, 27, 27, 1)', 'rgba(127, 29, 29, 1)', 'rgba(69, 10, 10, 1)', 'rgba(28, 10, 10, 1)', 'rgba(69, 10, 10, 1)', 'rgba(127, 29, 29, 1)', 'rgba(153, 27, 27, 1)', 'rgba(185, 28, 28, 1)', 'rgba(220, 38, 38, 1)']
                    }
                }
            },
            'Romance': {
                'Jakarta': {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [280, 350, 320, 280, 220, 180, 160, 140, 200, 250, 300, 380],
                    title: 'Romance Movies in Jakarta',
                    chartType: 'line',
                    colors: {
                        background: 'rgba(236, 72, 153, 0.3)',
                        border: 'rgba(236, 72, 153, 1)'
                    }
                },
                'Bandung': {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [220, 280, 250, 220, 180, 140, 120, 100, 160, 200, 240, 300],
                    title: 'Romance Movies in Bandung',
                    chartType: 'bar',
                    colors: {
                        background: 'rgba(236, 72, 153, 0.7)',
                        border: 'rgba(236, 72, 153, 1)'
                    }
                },
                'Purwokerto': {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [150, 200, 180, 150, 120, 90, 80, 70, 110, 140, 170, 220],
                    title: 'Romance Movies in Purwokerto',
                    chartType: 'doughnut',
                    colors: {
                        background: ['#ec4899', '#db2777', '#be185d', '#9d174d', '#831843', '#500724', '#1e0a11', '#500724', '#831843', '#9d174d', '#be185d', '#db2777'],
                        border: ['#ec4899', '#db2777', '#be185d', '#9d174d', '#831843', '#500724', '#1e0a11', '#500724', '#831843', '#9d174d', '#be185d', '#db2777']
                    }
                },
                'Surabaya': {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [250, 320, 290, 250, 200, 160, 140, 120, 180, 220, 270, 340],
                    title: 'Romance Movies in Surabaya',
                    chartType: 'radar',
                    colors: {
                        background: 'rgba(236, 72, 153, 0.3)',
                        border: 'rgba(236, 72, 153, 1)'
                    }
                },
                'Medan': {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    data: [180, 240, 220, 180, 140, 110, 100, 90, 130, 170, 210, 280],
                    title: 'Romance Movies in Medan',
                    chartType: 'polarArea',
                    colors: {
                        background: ['rgba(236, 72, 153, 0.8)', 'rgba(219, 39, 119, 0.8)', 'rgba(190, 24, 93, 0.8)', 'rgba(157, 23, 77, 0.8)', 'rgba(131, 24, 67, 0.8)', 'rgba(80, 7, 36, 0.8)', 'rgba(30, 10, 17, 0.8)', 'rgba(80, 7, 36, 0.8)', 'rgba(131, 24, 67, 0.8)', 'rgba(157, 23, 77, 0.8)', 'rgba(190, 24, 93, 0.8)', 'rgba(219, 39, 119, 0.8)'],
                        border: ['rgba(236, 72, 153, 1)', 'rgba(219, 39, 119, 1)', 'rgba(190, 24, 93, 1)', 'rgba(157, 23, 77, 1)', 'rgba(131, 24, 67, 1)', 'rgba(80, 7, 36, 1)', 'rgba(30, 10, 17, 1)', 'rgba(80, 7, 36, 1)', 'rgba(131, 24, 67, 1)', 'rgba(157, 23, 77, 1)', 'rgba(190, 24, 93, 1)', 'rgba(219, 39, 119, 1)']
                    }
                }
            }
        };

        // Inisialisasi dengan data default untuk grafik penjualan dan tiket
        let currentSalesMovie = 'Movies Name';
        let currentSalesPeriod = 'Weekly';
        let currentTicketCategory = 'Category';
        let currentTicketLocation = 'Location';

        // Opsi grafik yang dinamis berdasarkan tipe grafik
        function getChartOptions(chartType) {
            const baseOptions = {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        // Tampilkan legenda hanya untuk tipe grafik tertentu
                        display: ['doughnut', 'polarArea', 'radar'].includes(chartType),
                        position: 'bottom'
                    }
                }
            };

            // Konfigurasi skala sumbu X untuk grafik garis dan batang
            if (['line', 'bar'].includes(chartType)) {
                baseOptions.scales = {
                    x: {
                        grid: {
                            color: 'rgba(229, 231, 235, 1)', // Warna garis grid
                            drawBorder: false // Jangan menggambar border sumbu
                        },
                        ticks: {
                            color: '#6B7280', // Warna teks label sumbu
                            font: { size: 12 } // Ukuran font label sumbu
                        }
                    }
                };
            }

            return baseOptions;
        }

        // Dapatkan konteks canvas untuk grafik penjualan dan tiket
        const salesCtx = document.getElementById('salesChart').getContext('2d');
        // Inisialisasi grafik penjualan dengan data default (tipe bar)
        let salesChart = new Chart(salesCtx, {
            type: 'bar',
            data: getSalesChartData(),
            options: getChartOptions('bar')
        });

        const ticketCtx = document.getElementById('ticketChart').getContext('2d');
        // Inisialisasi grafik tiket dengan data default (tipe line)
        let ticketChart = new Chart(ticketCtx, {
            type: 'line',
            data: getTicketChartData(),
            options: getChartOptions('line')
        });

        // Fungsi untuk mendapatkan data chart penjualan berdasarkan pilihan dropdown
        function getSalesChartData() {
            const movieData = salesDataSets[currentSalesMovie][currentSalesPeriod];
            
            const dataset = {
                label: 'Sales',
                data: movieData.data,
                fill: movieData.chartType === 'line', // Isi area di bawah garis untuk grafik garis
                tension: movieData.chartType === 'line' ? 0.4 : 0, // Kelengkungan garis untuk grafik garis
                pointRadius: movieData.chartType === 'line' ? 0 : undefined, // Sembunyikan titik data untuk grafik garis
                pointHoverRadius: movieData.chartType === 'line' ? 6 : undefined // Ukuran titik saat di-hover
            };

            // Atur warna latar belakang dan border dataset
            if (Array.isArray(movieData.colors.background)) {
                dataset.backgroundColor = movieData.colors.background;
                dataset.borderColor = movieData.colors.border;
            } else {
                dataset.backgroundColor = movieData.colors.background;
                dataset.borderColor = movieData.colors.border;
                dataset.borderWidth = 3; // Lebar border untuk grafik garis/batang
            }

            return {
                labels: movieData.labels,
                datasets: [dataset]
            };
        }

        // Fungsi untuk mendapatkan data chart tiket berdasarkan pilihan dropdown
        function getTicketChartData() {
            let data;
            
            // Jika kategori atau lokasi belum dipilih, gunakan data default 'Category' dan 'Location'
            if (currentTicketCategory === 'Category' || currentTicketLocation === 'Location') {
                data = ticketDataSets['Category']['Location'];
            } else {
                // Gunakan data spesifik berdasarkan kategori dan lokasi yang dipilih
                data = ticketDataSets[currentTicketCategory][currentTicketLocation];
            }
            
            const dataset = {
                label: 'Ticket Sales',
                data: data.data,
                fill: data.chartType === 'line',
                tension: data.chartType === 'line' ? 0.4 : 0,
                pointRadius: data.chartType === 'line' ? 0 : undefined,
                pointHoverRadius: data.chartType === 'line' ? 6 : undefined
            };

            // Atur warna latar belakang dan border dataset
            if (Array.isArray(data.colors.background)) {
                dataset.backgroundColor = data.colors.background;
                dataset.borderColor = data.colors.border;
            } else {
                dataset.backgroundColor = data.colors.background;
                dataset.borderColor = data.colors.border;
                dataset.borderWidth = 3;
            }

            return {
                labels: data.labels,
                datasets: [dataset]
            };
        }

        // Fungsi untuk memperbarui grafik penjualan
        function updateSalesChart() {
            const movieData = salesDataSets[currentSalesMovie][currentSalesPeriod];
            document.getElementById('salesChartTitle').textContent = movieData.title;
            
            // Hancurkan grafik yang ada dan buat yang baru dengan tipe yang berbeda (jika perlu)
            salesChart.destroy();
            salesChart = new Chart(salesCtx, {
                type: movieData.chartType, // Tipe grafik akan berubah sesuai data
                data: getSalesChartData(),
                options: getChartOptions(movieData.chartType)
            });
        }

        // Fungsi untuk memperbarui grafik tiket
        function updateTicketChart() {
            let data;
            
            // Logika untuk memilih dataset yang benar
            if (currentTicketCategory === 'Category' || currentTicketLocation === 'Location') {
                data = ticketDataSets['Category']['Location'];
            } else {
                data = ticketDataSets[currentTicketCategory][currentTicketLocation];
            }
            
            document.getElementById('ticketChartTitle').textContent = data.title;
            
            // Hancurkan grafik yang ada dan buat yang baru dengan tipe yang berbeda (jika perlu)
            ticketChart.destroy();
            ticketChart = new Chart(ticketCtx, {
                type: data.chartType, // Tipe grafik akan berubah sesuai data
                data: getTicketChartData(),
                options: getChartOptions(data.chartType)
            });
        }

        // Fungsionalitas Dropdown
        function toggleDropdown(dropdownId) {
            const dropdown = document.getElementById(dropdownId);
            const allDropdowns = document.querySelectorAll('.dropdown-content');
            
            // Tutup semua dropdown lainnya
            allDropdowns.forEach(d => {
                if (d.id !== dropdownId) {
                    d.classList.remove('show');
                }
            });
            
            // Toggle dropdown saat ini (tampilkan/sembunyikan)
            dropdown.classList.toggle('show');
        }

        function selectOption(selectedId, value) {
            document.getElementById(selectedId).textContent = value;
            
            // Perbarui variabel berdasarkan pilihan dropdown
            if (selectedId === 'moviesSelected') {
                currentSalesMovie = value;
                updateSalesChart(); // Perbarui grafik penjualan
            } else if (selectedId === 'periodSelected') {
                currentSalesPeriod = value;
                updateSalesChart(); // Perbarui grafik penjualan
            } else if (selectedId === 'categorySelected') {
                currentTicketCategory = value;
                updateTicketChart(); // Perbarui grafik tiket
            } else if (selectedId === 'locationSelected') {
                currentTicketLocation = value;
                updateTicketChart(); // Perbarui grafik tiket
            }
            
            // Tutup semua dropdown setelah memilih opsi
            document.querySelectorAll('.dropdown-content').forEach(d => {
                d.classList.remove('show');
            });
        }

        // Tutup dropdown saat mengklik di luar area dropdown
        window.onclick = function(event) {
            // Periksa apakah target klik BUKAN tombol dropdown dan BUKAN elemen di dalamnya
            if (!event.target.matches('.dropdown button') && !event.target.matches('.dropdown button *')) {
                const dropdowns = document.querySelectorAll('.dropdown-content');
                dropdowns.forEach(dropdown => {
                    if (dropdown.classList.contains('show')) {
                        dropdown.classList.remove('show');
                    }
                });
            }
        }

        // Efek animasi saat grafik berubah
        function addChartChangeAnimation() {
            document.querySelectorAll('canvas').forEach(canvas => {
                canvas.style.transition = 'all 0.3s ease-in-out';
            });
        }

        // Inisialisasi animasi saat halaman dimuat
        addChartChangeAnimation();
   