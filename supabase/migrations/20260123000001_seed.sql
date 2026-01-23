
-- Insert Service Categories
INSERT INTO "service_categories" ("id", "name", "slug", "order", "updatedAt") VALUES
('cat_nail', 'Nail Art', 'nail-art', 1, NOW()),
('cat_mani', 'Manikür & Pedikür', 'manikur-pedikur', 2, NOW()),
('cat_gel', 'Kalıcı Oje', 'kalici-oje', 3, NOW())
ON CONFLICT ("slug") DO NOTHING;

-- Insert Services
INSERT INTO "services" ("id", "categoryId", "name", "slug", "description", "durationMin", "priceMin", "priceMax", "images", "updatedAt") VALUES
(gen_random_uuid(), 'cat_nail', 'Klasik Nail Art', 'klasik-nail-art', 'Özel tasarım tırnak süslemesi.', 60, 350, 500, ARRAY['/images/services/klasik-nail-art.png'], NOW()),
(gen_random_uuid(), 'cat_nail', 'Premium Nail Art', 'premium-nail-art', 'Kristal, taş ve özel detaylarla lüks tasarım.', 90, 600, 800, ARRAY['/images/services/premium-nail-art.png'], NOW()),
(gen_random_uuid(), 'cat_gel', 'Kalıcı Oje', 'kalici-oje', 'Uzun ömürlü kalıcı oje uygulaması.', 45, 250, NULL, ARRAY['/images/services/kalici-oje.png'], NOW()),
(gen_random_uuid(), 'cat_gel', 'Kalıcı Oje + Tasarım', 'kalici-oje-tasarim', 'Kalıcı oje üzerine minimal tasarım.', 60, 350, 450, ARRAY['/images/services/kalici-oje-tasarim.png'], NOW()),
(gen_random_uuid(), 'cat_mani', 'Klasik Manikür', 'klasik-manikur', 'Tırnak bakımı, şekillendirme ve cilalama.', 30, 150, NULL, ARRAY['/images/services/klasik-manikur.png'], NOW()),
(gen_random_uuid(), 'cat_mani', 'Fransız Manikür', 'fransiz-manikur', 'Klasik beyaz uçlu şık tırnak görünümü.', 45, 200, NULL, ARRAY['/images/services/fransiz-manikur.png'], NOW())
ON CONFLICT ("slug") DO NOTHING;

-- Insert Business Hours
INSERT INTO "business_hours" ("id", "dayOfWeek", "isOpen", "openTime", "closeTime", "updatedAt") VALUES
(gen_random_uuid(), 'MONDAY', true, '09:00', '20:00', NOW()),
(gen_random_uuid(), 'TUESDAY', true, '09:00', '20:00', NOW()),
(gen_random_uuid(), 'WEDNESDAY', true, '09:00', '20:00', NOW()),
(gen_random_uuid(), 'THURSDAY', true, '09:00', '20:00', NOW()),
(gen_random_uuid(), 'FRIDAY', true, '09:00', '20:00', NOW()),
(gen_random_uuid(), 'SATURDAY', true, '09:00', '18:00', NOW()),
(gen_random_uuid(), 'SUNDAY', false, '09:00', '18:00', NOW())
ON CONFLICT ("dayOfWeek") DO UPDATE 
SET "isOpen" = EXCLUDED."isOpen", "openTime" = EXCLUDED."openTime", "closeTime" = EXCLUDED."closeTime";
