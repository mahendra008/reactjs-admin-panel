export default {items:[
	{
		type: 'tab', 
		icon: 'home_work', 
		title: 'Planning',
        id: 'planning',
		list:[
			{type: 'route', icon: 'dashboard', title: 'L2 Switch Life Cycle', route:'/l2'},
			{type: 'route', icon: 'dashboard', title: 'DCN Switch LIfe Sycle', route:'/dcn'},
			{type: 'route', icon: 'dashboard', title: 'ASR 901 As CSS', route:'/as901'},
		]
	},
	{
		type: 'tab', 
		icon: 'home_work', 
		title: 'Admin',
        id: 'admin', 
		list:[
			{type: 'route', icon: 'dashboard', title: 'Access Managel', route:'/access-manager'}
		]
	},
	{
		type: 'tab', 
		icon: 'home_work', 
		title: 'ATP 1B',
        id: 'atp1b',
		list:[
			{
				type: 'tab', 
				icon: 'dashboard',
				title: 'Small Cell',
                id: 'smallcell',
				list:[
					{type: 'route', icon: 'dashboard', title: '901', route:'/901'},
					{type: 'route', icon: 'dashboard', title: 'Fiber Home', route:'/fiber-home'},
					{type: 'route', icon: 'dashboard', title: 'Raisecom', route:'/raisecom'},
					{type: 'route', icon: 'dashboard', title: 'HFCL', route:'/hfcl'}
				]
			},
			{
				type: 'tab', 
				icon: 'home_work', 
				title: 'WI-FI',
                id: 'wifi',
				list:[
					{type: 'route', icon: 'dashboard', title: 'Fiber Home', route:'/fiber-home'},
					{type: 'route', icon: 'dashboard', title: 'Raisecom', route:'/raisecom'},
					{type: 'route', icon: 'dashboard', title: 'HFCL', route:'/Techroute 2506'},
					{type: 'route', icon: 'dashboard', title: 'HFCL', route:'/hfcl'}
				]
			},
			{
				type: 'tab', 
				icon: 'home_work', 
				title: 'Enterprise',
                id: 'enterprise',
				list:[
					{type: 'route', icon: 'dashboard', title: 'MDS', route:'/fiber-home'},
					{type: 'route', icon: 'dashboard', title: 'EDGE CORE', route:'/edgecore'},
				]
			},
		]
	}
]}