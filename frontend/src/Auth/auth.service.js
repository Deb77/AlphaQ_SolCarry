class AuthService {
  
  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return localStorage.getItem('user');
  }
  
}

export default new AuthService();
