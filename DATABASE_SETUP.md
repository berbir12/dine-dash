# Database Setup Instructions

## 🗄️ **Supabase Database Setup**

### **1. Run the Migrations**

You need to run the database migrations to create the required tables. Here are the steps:

#### **Option A: Using Supabase CLI (Recommended)**
```bash
# Install Supabase CLI if you haven't already
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref YOUR_PROJECT_REF

# Run migrations
supabase db push
```

#### **Option B: Using Supabase Dashboard**
1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Run the following SQL commands in order:

```sql
-- First, run the restaurant_registrations migration
-- (This should already be done)

-- Then run the admin_users migration
-- Copy and paste the contents of: supabase/migrations/20250124000000_create_admin_users.sql
```

### **2. Database Tables Created**

#### **restaurant_registrations**
- Stores restaurant registration data from the public form
- Fields: id, restaurant_name, contact_name, email, phone, location, status, created_at, updated_at

#### **admin_users**
- Stores admin user accounts for dashboard access
- Fields: id, name, email, password_hash, role, is_active, created_at, updated_at, last_login

### **3. Default Admin Account**

A default admin account is created with:
- **Email**: admin@dine-dash.com
- **Password**: admin123
- **Role**: admin

⚠️ **Important**: Change this password immediately in production!

### **4. Row Level Security (RLS)**

- **restaurant_registrations**: Public can insert, anyone can view (for admin purposes)
- **admin_users**: Only authenticated admins can access

### **5. Testing the Setup**

1. Start the development server: `npm run dev`
2. Go to `http://localhost:8080/admin`
3. Try signing up with a new admin account
4. Or sign in with the default account (admin@dine-dash.com / admin123)

### **6. Production Considerations**

- Change the default admin password
- Use proper password hashing (bcrypt recommended)
- Set up proper RLS policies for production
- Consider using Supabase Auth for better security
- Set up proper backup strategies

## 🔧 **Troubleshooting**

### **Migration Issues**
- Make sure your Supabase project is active
- Check that you have the correct project reference
- Verify your database connection

### **Authentication Issues**
- Check that the admin_users table exists
- Verify the password hashing is working
- Check browser console for errors

### **Permission Issues**
- Ensure RLS policies are properly set
- Check that your Supabase API keys are correct
- Verify the table permissions in Supabase dashboard
