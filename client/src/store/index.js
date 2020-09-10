import React,{ createContext, useContext, useReducer } from "react";

import {
    LOGIN_USER,
    LOGOUT_USER,
    SET_CURRENT_POST,
    REMOVE_POST,
    SET_POSTS,
    ADD_POST,
    UPDATE_POST,
    // ADD_FAVORITE,
    // UPDATE_FAVORITES,
    // REMOVE_FAVORITE,
    LOADING,
    USER_INFO,
  
    SET_GROUP_NAME,
    GET_GROUP,
    REMOVE_GROUP
} from "./actions";

const StoreContext = createContext({
    userAuth: {},
});

const { Provider } = StoreContext;

const reducer = ( state, action ) => {

    switch( action.type ) {
        case LOGIN_USER:

            return { ...state, userAuth: action.payload };

        case LOGOUT_USER:

            return { ...state, userAuth: undefined };

        case SET_CURRENT_POST:
            return {
                  ...state,
                  currentPost: action.post,
                  loading: false
                };
            
              case SET_POSTS:
                return {
                  ...state,
                  posts: [...action.posts],
                  loading: false
                };
            
              case ADD_POST:
                return {
                  ...state,
                  posts: [...state.posts, action.post],
                  loading: false
                };
            
              case REMOVE_POST:
                return {
                  ...state,
                  posts: state.posts.filter((post) => {
                    return post._id !== action._id; 
                  })
                };
            
              case UPDATE_POST:
                return{
                  ...state,
                  posts: state.posts.map((post) => {
                    if(post._id !== action.post._id) return post
                    return action.post
                  })
                }
            
                case USER_INFO:
                  return {
                    ...state,
                    user: action.user,
                    loading: false
                  };
            
                case SET_GROUP_NAME:
                  return {
                    ...state,
                    groupName: [...state.groups, action.postGroup],
                    loading: false
                  };
            
                case GET_GROUP:
                  return{
                    ...state,
                    groups: [...action.groups],
                    loading: false
                  }
            
                case REMOVE_GROUP:
                return {
                  ...state,
                  groupName: state.groups.filter((group) => {
                    return group._id !== action._id; 
                  })
                };
            
              // case ADD_FAVORITE:
              //   return {
              //     ...state,
              //     favorites: [action.post, ...state.favorites],
              //     loading: false
              //   };
            
              // case UPDATE_FAVORITES:
              //   return {
              //     ...state,
              //     favorites: [...state.favorites],
              //     loading: false
              //   };
            
              // case REMOVE_FAVORITE:
              //   return {
              //     ...state,
              //     favorites: state.favorites.filter((post) => {
              //       return post._id !== action._id; 
              //     })
              //   };
            
              case LOADING:
                return {
                  ...state,
                  loading: true
                };

        default:
            return state;
    }

}

export const getStoreAction = ( type, payload ) => {

    return { type, payload };

}

export const StoreProvider = ( { children } ) => {

    const [ store, dispatch ] = useReducer( reducer, 
        {
        userAuth: undefined,
        posts: [],
        currentPost: {
        _id: 0,
        title: "",
        body: "",
        author: ""
        },
        favorites: [],
        user: {
        date: "",
        email: "",
        password: "",
        userName: ""
        },
        newGroup: {
        groupName: "",
        owner: "",
        users: "",
        },
        loading: false
        } 
    );

    return <Provider value={[store, dispatch]}>{ children }</Provider>

}

export const useStoreContext = () => {

    return useContext( StoreContext );

}