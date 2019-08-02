function debug(...args){
    console.log.apply(console, ['ZEN - ' + args[0], ...args.slice(1)]);
}

let sufferHarmPartial = [
    '* At least some of the Harm must be taken as Trauma.',
    'You may spend Resolve, and choose the Consequence.',
    'You may gain a point of Despair, and reduce the Harm taken by one degree.',
    'You may cry for help. If you do so, any party member may choose to intervene, suffering the Consequence in your stead, and reducing the Harm you take by one degree. If no one intervenes, you also gain a point of Despair.',
    'You may spend a point of Despair, and the MC chooses an additional Consequence.',
].join('\n* ');

const moveTypes = {
    core: 1,
    peripheral: 2,
    basic: 3,
    advanced: 4
}

const moveDoneOptions = {
    clear: 0,
    red: 1,
    green: 2,
    gold: 3
};

var dunmurghMoves = {
    gainTheUpperHand: {
        type: moveTypes.core,
        movedone: moveDoneOptions.green,
        name: 'Gain the Upper Hand',
        trigger: 'When you maneuver to gain an advantage in a conflict,  describe how and roll +Affinity',
         rolltype: '@{statmod_query}',
        fullhit: 'Choose one:',
        partialhit: 'Choose one and cede one to the opponent:',
        miss: 'Choose none and the MC makes a move',
        details: '* Gain Control\n* Gain Momentum\n* Gain Awareness\n* Gain Position\n* Gain Coherence'
    },
    pressTheAdvantage: {
        type: moveTypes.core,
        movedone: moveDoneOptions.green,
        name: 'Press the Advantage',
        trigger: 'When you exploit an advantage in a conflict, describe how and roll +Affinity',
        rolltype: '@{statmod_query}',
        fullhit: 'You maintain the advantage and choose two.  At your option, you may sacrifice the advantage, choose three, and suffer retaliation.',
        partialhit: 'You overextend yourself and sacrifice the advantage, opening yourself up to some negative consequence. Choose one.',
        miss: 'Choose none and the MC makes a move.',
        details: '* Deal Harm\n* Capitalize on your advantage. Describe how.\n* Share your advantage\n* Dismay your opponent'
    },
    compelAResolution: {
        type: moveTypes.core,
        movedone: moveDoneOptions.red,
        name: 'Compel A Resolution',
        trigger: 'When you attempt to compel a resolution to a conflict with an opponent who may be inclined to acquiesce roll +something (threat of harm, harm already done, leverage an asset, affinity or raw will).',
        rolltype: '0',
        fullhit: 'The opponent submits (but they don\'t have to like it)',
        partialhit: 'You overextend yourself and sacrifice the advantage,he opponent chooses one:\n\n* They fight back, trade Harm\n* They demand better terms\n* They offer a counter proposal\n* opening yourself up to some negative consequence. Choose one.',
        miss: '',
    },
    sufferHarm: {
        type: moveTypes.core,
        movedone: moveDoneOptions.green,
        name: 'Suffer Harm',
        trigger: 'When you suffer Harm, describe how you want to divide Harm between Stress and Trauma, then roll +Harm (Minor: 1, Severe: 2, Lethal: 3, Overwhelming: 4).',
        rolltype: '0',
        alwaysShowEverything: 1,
        fullhit: ['The MC chooses one, as well as a Consequence from the list below:\n',
                    [
                        '* You must spend a point of Resolve, or take Harm of one degree higher.',
                        'At least some of the Harm must be taken as Stress.',
                        'Something important to you bears the brunt of the Harm. What is it?',
                        'Choose one additional Consequence from the list below.',
                        'The MC chooses one from the Partial list below.',
                    ].join('\n* '),
                    '\nPartial list:\n',
                    sufferHarmPartial
                ].join('\n'),
        partialhit: ['Choose one, then the MC chooses one, as well as a Consequence from the list below:\n',
                    sufferHarmPartial
                ].join('\n'),
        miss: 'The MC chooses a Consequence from the list below:',
        details: [
            'CONSEQUENCES:',
           'You lose control (Order)',
           'You lose awareness (Mind)',
           'You lose momentum (Dynamism)',
           'You lose position (Connection)',
           'You lose coherence (Entropy)',
        ].join('\n* ')
    },
    breakUnderPressure: {
        type: moveTypes.core,
        movedone: moveDoneOptions.red,
        name: 'Break Under Pressure',
        trigger: 'When you fill your last stress slot Suffer Harm as normal and roll Challenge Dice vs Resolve.',
        rolltype: '0',
        fullhit: 'You manage to retain some control of your faculties and attempt to remove yourself from the conflict in good order.',
        partialhit: [
            '* You must spend a resolve if you wish to maintain control otherwise choose one',
            'Collapse into unconsciousness',
            'Flee panicked, dropping anything you are holding in a scramble to escape.',
            'Lash out blindly hurting foe and friend alike as you flee.',
        ].join('\n* ')
    },
    unearthTheAwfulTruth: {
        type: moveTypes.core,
        movedone: moveDoneOptions.green,
        name: 'Unearth the Awful Truth',
        trigger: 'When you attend to a situation to peel back the veneer of what is obvious roll +Affinity and describe what you do.',
        rolltype: '@{statmod_query}',
        fullhit: 'Ask three questions:',
        partialhit: 'Ask one question:',
        miss: 'Ask no questions. The MC makes a move.',
        details: [
            '* What here can be turned to my advantage?',
            'What has transpired here of late? (Less clunky)',
            'What looms in the future?',
            'What should I be on the lookout for?',
            'What lurks beyond my ken?',
            'Who is really in control here?',
        ].join('\n* ')
    },
    actUnderPressure: {
        type: moveTypes.core,
        movedone: moveDoneOptions.red,
        name: 'Act Under Pressure',
        trigger: 'When you attempt to act despite an imminent threat, potential risk, or other calamity that may occur roll +Affinity and describe what you do.',
        rolltype: '@{statmod_query}',
        fullhit: 'You accomplish what you intended without undue cost.',
        partialhit: 'Complications demand your attention, The MC will offer you a worse outcome, mixed result, hard decision, or success with cost and you must explain how you confront this.'
    },
    spoutLore: {
        type: moveTypes.core,
        movedone: moveDoneOptions.green,
        name: 'Spout Lore',
        trigger: 'When you consider your knowledge, training, or expertise on a subject roll +Affinity',
        rolltype: '@{statmod_query}',
        fullhit: 'You add an interesting or useful detail about the subject, then the MC does as well.',
        partialhit: 'The MC adds a useful or interesting detail about the subject.',
        details: 'If someone added detail, the MC may ask you how you know this.'
    },
    putANameToAFace: {
        type: moveTypes.core,
        movedone: moveDoneOptions.green,
        name: 'Put A Name To A Face',
        trigger: 'When you attempt to recall who someone of note is and what you may know of them roll +Affinity.',
        rolltype: '@{statmod_query}',
        fullhit: 'You know something of their social standing, faction association, or loyalties.',
        partialhit: 'You both know something of each other’s social standing, faction association, or loyalties.'
    },
};

function getNewMoveAttrs(move, rowid) {
    debug('generating new move attributes for:',move,rowid);
    let rowId = rowid || 0;
	if (dunmurghMoves[move]) {
		var newmoveid = rowid;
		if (!rowid) {
			newmoveid = generateRowID();
		}
		var prefix = "repeating_move_" + newmoveid + "_";
		var attrs = {};
		attrs[prefix + "movename"] = dunmurghMoves[move].name;
		if (dunmurghMoves[move].trigger) attrs[prefix + "trigger"] = dunmurghMoves[move].trigger;
        if (dunmurghMoves[move].rolltype) attrs[prefix + "rolltype"] = dunmurghMoves[move].rolltype;
        if (dunmurghMoves[move].fullhit) attrs[prefix + "fullhit"] = dunmurghMoves[move].fullhit;
        if (dunmurghMoves[move].partialhit) attrs[prefix + "partialhit"] = dunmurghMoves[move].partialhit;
        if (dunmurghMoves[move].miss) attrs[prefix + "miss"] = dunmurghMoves[move].miss;
        if (dunmurghMoves[move].details) attrs[prefix + "details"] = dunmurghMoves[move].details;
        attrs[prefix + "movedone"] = dunmurghMoves[move].movedone || 0;
        let movetype = dunmurghMoves[move].type;
        movetype = movetype !== undefined
          ? movetype
          : moveTypes.advanced;
        Object.keys(moveTypes).map(k => {
            return [k,moveTypes[k] === movetype ? ''+movetype : ''];
        }).forEach(([key, value]) => {attrs[prefix + 'movetype_' + key] = value});
        attrs[prefix + "movetype"] = movetype;
        attrs[prefix + "movetype_shown"] = movetype;
		// Don't need the move expanded if it was auto added.
		if (rowId == 0)	{
			attrs[prefix + "editmove"] = 0;
        }
		return attrs;
    }
}

let getAttrsPromise = false,
    getSectionIDsPromise = false,
    setAttrsPromise = false;

var getAllCoreMoveAttrs = function(){
    let attrs = [ 'gainTheUpperHand',
        'pressTheAdvantage',
        'compelAResolution',
        'sufferHarm',
        'breakUnderPressure',
        'unearthTheAwfulTruth',
        'actUnderPressure',
        'spoutLore',
        'putANameToAFace',
    ]
    .map(move => {return getNewMoveAttrs(move)})
    .reduce((p,c) => {
        return {...p, ...c};
    },{});
    return attrs;
}

on('change:repeating_move:movetype_shown', function(eventinfo){
    debug('changing movetype?', eventinfo);
    getAttrs(['repeating_move_movetype_shown'], v => {
        debug('changing movetype!', v);
        let newValue = parseInt(v.repeating_move_movetype_shown);
        let id = eventinfo.triggerName.replace('repeating_move_','').replace('_movetype_shown','');
        let newAttrs = {};
        ['core','peripheral','basic','advanced'].map(s => {
            let numval = moveTypes[s];
            let tag = 'repeating_move_'+id+'_movetype_'+s;
            if (numval === newValue) {
                newAttrs[tag] = ''+newValue;
            } else {
                newAttrs[tag] = '';
            }
        });
        newAttrs['repeating_move_'+id+'_movetype'] = ''+newValue;
        debug('doing the change!',newAttrs);
        setAttrs(newAttrs);
    });
});

on('change:move_filter_shown', function(eventinfo){
    debug('changing move_filter?', eventinfo);
    getAttrs(['move_filter_shown'],v => {
        debug('changing move_filter!', v);
        setAttrs({move_filter: v.move_filter_shown});
    });
});

function buildName(section, id, name){
    return ['repeating',section,id,name].join('_');
}

takeFirst = ([a]) => a;
takeLast = (arr) => arr.slice(-1)[0];
mergeObj = (a,b) => {return {...a, ...b};};

on('sheet:opened', function(){
    debug('sheet opened');

    // Promises....maybe someday I hope...
    // getAttrsPromise = function(attrs) {
    //     return new Promise(function(resolve, reject){
    //         getAttrs(attrs, function(v){
    //             debug('got the attrs');
    //             resolve(v);
    //         });
    //     });
    // }
    // getSectionIDsPromise = function(section) {
    //     return new Promise((resolve, reject) => {
    //         getSectionIDs(section, function(idarr){resolve(idarr)});
    //     });
    // }
    // setAttrsPromise = function(attrs, silent = true) {
    //     return new Promise((resolve, reject) => {
    //         setAttrs(attrs, {silent: silent}, function(){resolve()});
    //     });
    // }


    let attrs = {}, idCouplets = [], ids = [];
    getAttrs(['basic_moves_added','move_filter_shown'], function(v) {

        // Handle adding basic moves (if they don't exist)
        debug('got basic moves and move filter things', v);
        if (v.basic_moves_added === undefined || !parseInt(v.basic_moves_added)) {
            let allCoreMoveAttrs = getAllCoreMoveAttrs();
            debug('core move attrs:',allCoreMoveAttrs);
            attrs = {...allCoreMoveAttrs};
            debug('attrs so far',{...attrs});
            attrs.basic_moves_added = 1;
        }

        // Handle move filter
        if(!v.move_filter_shown) {
            attrs.move_filter_shown = 0;
            attrs.move_filter = 0;
        } else {
            attrs.move_filter = v.move_filter_shown;
        }
        
        getSectionIDs('move', idarr => {
            debug('got ids',idarr);
            let namer = (id) => [
                buildName('move',id,'movetype_shown'),
                buildName('move',id,'movetype')
            ];
            idCouplets = idarr.map(namer);

            getAttrs(idCouplets.map(takeFirst),moveTypeAttrs => {
                debug('got attrs',moveTypeAttrs);
                let moveUpdates = idCouplets.map(([shown, base]) => {
                        let data = {};
                        let shownValue = parseInt(moveTypeAttrs[shown]);
                        ['core','peripheral','basic','advanced'].map(s => {
                            let numval = moveTypes[s];
                            let tag = base+ '_' +s;
                            if (numval === shownValue) {
                                data[tag] = ''+shownValue;
                            } else {
                                data[tag] = '';
                            }
                        });
                        return data;
                    }).reduce(mergeObj,{});
                let updateAttrs = attrs;//{...attrs, ...moveUpdates};
                debug('The updates:',updateAttrs);
                setAttrs(updateAttrs);
            });
        });
    });
});

on('clicked:sheet_toggle_flaw', function(eventinfo) {
		getAttrs(['flaw_or_drive'], function(val){
		    if (val.flaw_or_drive ==='Flaw') {
		        setAttrs({flaw_or_drive: 'Drive'});
		    } else if (val.flaw_or_drive === 'Drive') {
		        setAttrs({flaw_or_drive: 'Flaw'});
		    } else {
		        setAttrs({flaw_or_drive: 'LOL WAT'});
		    }
		});
	});
	
on('clicked:assets_trauma_assets', function(eventinfo) {
   setAttrs({assets_trauma: 'on'});
});

on('clicked:assets_trauma_trauma', function(eventinfo) {
   setAttrs({assets_trauma: '0'});
});