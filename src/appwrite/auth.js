import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectID);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const session = await this.account.get();
      return session;
    } catch (error) {
      console.error("Appwrite service :: getCurrentUser :: error", error);
    }

    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
      console.log("Previous session deleted.");
    } catch (error) {
      console.log("Appwrite serive :: logout :: error", error);
    }
  }
  
  async ensureAuthenticated() {
    try {
      const session = await this.account.getSession("current");
      console.log("User is already logged in:", session);

      // If logged in, fetch and return the current user's account details
      const user = await this.getCurrentUser();
      return user;
    } catch (error) {
      if (error instanceof AppwriteException && error.code === 401) {
        // If user is not logged in, handle accordingly
        console.log("User is not logged in:", error);
        return null;
      } else {
        // Log any other errors
        console.error("Error checking session:", error);
        return null;
      }
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
