// Migration script to update MongoDB events with new image URLs and coordinates
// Run with: node scripts/migrate-events.mjs

import mongoose from 'mongoose';

const MONGO_URI = 'mongodb://localhost:27017/eventry';

const updates = [
    { id: "661e259be4ffc982667a3ef0", imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop", latitude: 38.7685, longitude: -9.0934 },
    { id: "661e259be4ffc982667a3ef1", imageUrl: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&h=500&fit=crop", latitude: 36.1699, longitude: -115.1398 },
    { id: "661e259be4ffc982667a3ef2", imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=500&fit=crop", latitude: 41.3545, longitude: 2.1295 },
    { id: "661e259be4ffc982667a3ef3", imageUrl: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=500&fit=crop", latitude: 37.426, longitude: -122.0838 },
    { id: "661e259be4ffc982667a3ef4", imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=500&fit=crop", latitude: 47.6062, longitude: -122.3321 },
    { id: "661e259be4ffc982667a3ef5", imageUrl: "https://images.unsplash.com/photo-1591115765373-5f9cf1da241c?w=800&h=500&fit=crop", latitude: 36.1215, longitude: -115.1739 },
    { id: "661e259be4ffc982667a3ef6", imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=500&fit=crop", latitude: 37.7749, longitude: -122.4194 },
    { id: "661e259be4ffc982667a3ef7", imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=500&fit=crop", latitude: 43.6532, longitude: -79.3832 },
    { id: "661e259be4ffc982667a3ef8", imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop", latitude: 52.5074, longitude: 13.2719 },
    { id: "661e259be4ffc982667a3ef9", imageUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=500&fit=crop", latitude: 25.2414, longitude: 55.2979 },
];

async function migrate() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(MONGO_URI);
        console.log('Connected!');

        const db = mongoose.connection.db;
        const collection = db.collection('events');

        for (const update of updates) {
            const result = await collection.updateOne(
                { _id: new mongoose.Types.ObjectId(update.id) },
                { $set: { imageUrl: update.imageUrl, latitude: update.latitude, longitude: update.longitude } }
            );
            console.log(`Updated ${update.id}: matched=${result.matchedCount}, modified=${result.modifiedCount}`);
        }

        console.log('\nMigration complete!');
        await mongoose.disconnect();
        process.exit(0);
    } catch (err) {
        console.error('Migration failed:', err);
        process.exit(1);
    }
}

migrate();
